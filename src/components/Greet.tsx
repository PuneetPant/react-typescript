type GreetProps = {
  name: string;
  messages: number;
  isLoggedIn: boolean;
}
export const Greet = (props: GreetProps) => {
  const { name, messages, isLoggedIn } = props;
  return (
    <div>
      {
        isLoggedIn ? <h2>Welcome {name}! You have {messages} unread messages.</h2> : <h2>Welcome Guest</h2>
      }
    </div>
  )
}