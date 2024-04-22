import { Container } from "../UI/Container";
import { Organizers } from "../organizers/Organizers";

export const InformationBlock = () => {
  return (
    <div className="bg-white rounded-[100px] py-16 ">
      <Container>
        <Organizers />
      </Container>
    </div>
  );
};
