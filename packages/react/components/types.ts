type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HtmlHTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;
