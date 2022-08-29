type PersonListProps = {
  personList: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  const { personList } = props;
  return (
    <div>
      {personList.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
