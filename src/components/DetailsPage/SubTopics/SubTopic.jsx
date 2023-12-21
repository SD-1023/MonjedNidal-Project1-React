function SubTopic({ subtopic }) {
  return (
    <li className="subTopicsListItem d-flex align-center">
      <ion-icon
        class="checkmarkIcon"
        name="checkmark-circle-outline"
      ></ion-icon>
      {subtopic}
    </li>
  );
}

export default SubTopic;
