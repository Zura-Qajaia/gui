import Textarea from "../ui/Textarea";
import Keyboard from "../components/Keyboard";
import { CiKeyboard } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TextArea({
  showKeyboard,
  text,
  setShowKeyboard,
  setText,
}) {
  const navigate = useNavigate();

  function insertElement(symbol) {
    setText(text + symbol);
  }

  function handleKeyboardToggle() {
    setShowKeyboard(!showKeyboard);
  }

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  function handleSearch() {
    navigate("/search", { state: text });
  }

  return (
    <div
      className={`bg-white p-2 shadow-md rounded-md ml-11 ${
        showKeyboard ? "h-96" : "h-43"
      } w-30`}
    >
      <Textarea
        onChange={handleTextareaChange}
        value={text}
        placeholder="What's your question?"
        className="h-full w-full p-2 mt-5 ml-12"
      />
      <div className="flex flex-row mt-3 ml-20">
        <button className="hover:text-violet-600 active:text-violet-700">
          <CiImageOn />
        </button>

        <button
          onClick={handleKeyboardToggle}
          className="ml-8 hover:text-violet-600 active:text-violet-700"
        >
          <CiKeyboard className="text-2xl" />
        </button>
        <button className="ml-96" onClick={handleSearch}>
          <FaArrowCircleRight />
        </button>
      </div>
      {showKeyboard && <Keyboard onInsertSymbol={insertElement} />}
    </div>
  );
}
