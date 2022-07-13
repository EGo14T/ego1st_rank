import { exec } from 'child_process'
import { promisify } from 'util'

const runCommand = promisify(exec)

const execCmd = async (command: string, powershell: boolean) => {
  try {
    let option = {
      shell: powershell ? `powershell.exe` : `cmd.exe`,
    }
    const { stderr, stdout } = await runCommand(command, option)

    if (stderr) {
      return Promise.reject(stderr)
    }

    return stdout
  } catch (error) {
    return Promise.reject(error)
  }
}

export const hasClientProcess = async () => {
  try {
    const cmdLine = await execCmd(
      `wmic PROCESS WHERE name='LeagueClientUx.exe' GET commandline`,
      false,
    )
    return cmdLine !== null;
  } catch (err) {
    console.error(`[cmd] `, '英雄联盟 进程未启动')
    return false;
  }
}

export const startClientExe = (exe: string) => {
  execCmd(
    `start "" "${exe}"`,
    false,
  )
}
