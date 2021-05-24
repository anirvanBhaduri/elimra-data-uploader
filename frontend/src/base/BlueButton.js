function BlueButton(props) {
  return (
    <button
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      class="bg-blue-500 hover:bg-blue-700 rounded-sm px-4 py-2"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default BlueButton;
