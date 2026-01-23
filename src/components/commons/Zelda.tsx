import type { FC, ReactNode } from 'react';
import { Link as PrimitiveLink, useSearchParams } from 'react-router';

interface Props {
  to: string;
  keepQueryParams?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Zelda: FC<Props> = ({ to, onClick, keepQueryParams = false, className, children }) => {
  const [searchParams] = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  let targetURL = String(to);

  if (keepQueryParams) {
    targetURL += `?${newSearchParams.toString()}`;
  }

  return (
    <PrimitiveLink onClick={onClick} to={targetURL} className={className}>
      {children}
    </PrimitiveLink>
  );
};
