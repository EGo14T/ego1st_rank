import React, { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface CustomLinkProps {
  activcClsName?: string;
  children: ReactNode;
  to: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  to,
  activcClsName,
  className,
}: CustomLinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({
    path: resolved.pathname,
    end: true,
    caseSensitive: false,
  });

  let navigate = useNavigate();

  return (
    <div
      className={[className, match ? activcClsName : null].join(' ')}
      onClick={() => navigate(to)}
    >
      {children}
    </div>
  );
};

export default CustomLink;
