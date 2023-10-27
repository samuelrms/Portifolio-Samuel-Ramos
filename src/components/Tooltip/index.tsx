import * as HoverCard from '@radix-ui/react-hover-card';
import { FC } from 'react';
import { useTheme } from 'styled-components';
import { Container, ContainerTooltip } from './styles';
import { Props } from './Tooltip.types';

export const Tooltip: FC<Props> = ({
  children,
  tooltip,
  arrow,
  open = 300,
  close = 300,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container>
      <HoverCard.Root openDelay={open} closeDelay={close}>
        <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
        <HoverCard.Content {...props} sideOffset={20}>
          <ContainerTooltip>{tooltip}</ContainerTooltip>
          {arrow && (
            <HoverCard.Arrow
              style={{
                fill: theme.primary
              }}
              className="arrow"
            />
          )}
        </HoverCard.Content>
      </HoverCard.Root>
    </Container>
  );
};
