type OnClick = () => void;

export interface Props {
  title: string;
  path: string;
  includes?: boolean;
  onClick?: OnClick;
}

export interface NavLinkProps {
  isActive: boolean;
  onClick?: OnClick;
}
