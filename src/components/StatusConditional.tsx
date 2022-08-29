type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  const { status } = props;
  let message;
  if (status === "loading") {
    message = "Data is Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error in fetching data.";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
