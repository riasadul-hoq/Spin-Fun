// This is a simple Button component that renders a button element with children content.

export default function Button({ children, ...rest }) {
  // Render a button element, spreading any additional props and displaying children inside
  return <button {...rest}>{children}</button>;
}
