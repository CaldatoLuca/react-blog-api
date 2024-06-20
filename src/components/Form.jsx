import FormInput from "./FormInput";
import useForm from "../useForm";

const formFields = [
  { type: "text", name: "title", label: "Title" },

  {
    type: "select",
    name: "category",
    label: "Category",
    options: [
      { value: "", label: "Select Category" },
      { value: "frontend", label: "Frontend" },
      { value: "backend", label: "Backend" },
      { value: "fullstack", label: "Fullstack" },
    ],
  },
  { type: "checkbox", name: "published", label: "Published" },
  {
    type: "multicheckbox",
    name: "tags",
    label: "Tags",
    options: [
      { value: "tag1", label: "Tag 1" },
      { value: "tag2", label: "Tag 2" },
      { value: "tag3", label: "Tag 3" },
    ],
  },
  { type: "textarea", name: "content", label: "Content" },
  { type: "file", name: "image", label: "Image" },
];

const Form = () => {
  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
    gender: "",
    published: false,
    tags: [],
    content: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
  };

  return (
    <div className="w-1/2 bg-neutral-900 text-neutral-100 flex items-center justify-center h-full">
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <FormInput
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            value={formValues[field.name]}
            onChange={handleInputChange}
            options={field.options}
          />
        ))}
        <button
          type="submit"
          className=" p-1 px-2 bg-neutral-100 text-neutral-900 mt-6 rounded-md"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Form;
