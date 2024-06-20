import FormInput from "./FormInput";
import useForm from "../useForm";

const Form = ({ categories, tags, addPost }) => {
  const categoryOptions = [
    { value: "", label: "Select Category" },
    ...categories.map((category) => ({
      value: category.id,
      label: category.name,
    })),
  ];
  const tagsOptions = [
    ...tags.map((tag) => ({
      value: tag.id,
      label: tag.name,
    })),
  ];
  const formFields = [
    { type: "text", name: "title", label: "Title" },
    {
      type: "select",
      name: "categoryId",
      label: "Category",
      options: categoryOptions,
    },
    { type: "checkbox", name: "published", label: "Published" },
    {
      type: "multicheckbox",
      name: "tags",
      label: "Tags",
      options: tagsOptions,
    },
    { type: "textarea", name: "content", label: "Content" },
    { type: "file", name: "image", label: "Image" },
  ];

  const [formValues, handleInputChange, resetForm] = useForm({
    title: "",
    categoryId: "",
    published: false,
    tags: [],
    content: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formValues);
    resetForm();
  };

  return (
    <div className="w-1/2 text-neutral-100 flex items-center justify-center h-screen ">
      <div className="fixed">
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
    </div>
  );
};

export default Form;
