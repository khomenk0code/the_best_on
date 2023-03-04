import styled, {ThemeProvider} from "styled-components";

export const BUTTON_TYPES = {
    primary: 'primary',
    primaryOutline: 'primaryOutline',
    secondaryOutline: 'secondaryOutline',
};

const COLORS = {
    primary: '#F1B634',
    secondary: '#0D316D',
    white: '#FFFFFF',
}

const BUTTON_THEMES = {
    [BUTTON_TYPES.primary]: {
        color: COLORS.secondary,
        background: COLORS.primary,
        border: `1px solid ${COLORS.primary}`,

        hover: {
            background: `${COLORS.primary}d4`,
        }
    },
    [BUTTON_TYPES.primaryOutline]: {
        color: COLORS.secondary,
        background: COLORS.white,
        border: `1px solid ${COLORS.primary}`,

        hover: {
            background: COLORS.primary,
            color: COLORS.secondary,
        }
    },
    [BUTTON_TYPES.secondaryOutline]: {
        color: COLORS.white,
        background: COLORS.secondary,
        border: `1px solid ${COLORS.white}`,

        hover: {
            background: COLORS.white,
            color: COLORS.secondary,
        }
    },
}

export const Button = ({type = BUTTON_TYPES.primary, text, ...rest}) => {

    const buttonTheme = BUTTON_THEMES.hasOwnProperty(type) ? BUTTON_THEMES[type] : BUTTON_THEMES.primary;
    return (
        <ThemeProvider theme={buttonTheme}>
            <StyledButton {...rest}>
                {text}
            </StyledButton>
        </ThemeProvider>
    )
}
const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  gap: 10px;
  width: 239px;
  height: 48px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s all ease-in;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  border: ${props => props.theme.border};
  font-size: 24px;


  &:hover {
    color: ${props => (props.theme.hover && props.theme.hover.color) || props.theme.color};
    background-color: ${props => (props.theme.hover && props.theme.hover.background) || props.theme.background};
  }
`;


