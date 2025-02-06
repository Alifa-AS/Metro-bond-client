import { useState } from "react";
import { toast } from "react-hot-toast";
import { TextInput, Textarea, Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const CreateStory = () => {
  const [formData, setFormData] = useState({
    selfBiodataId: "",
    partnerBiodataId: "",
    coupleImage: "",
    successStory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    toast.success("Success Story Submitted!");
    setFormData({
      selfBiodataId: "",
      partnerBiodataId: "",
      coupleImage: "",
      successStory: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Metro || Create Success Story </title>
      </Helmet>
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-200 lg:my-56">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Got Married? Share Your Story!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            name="selfBiodataId"
            placeholder="Your Biodata ID"
            value={formData.selfBiodataId}
            onChange={handleChange}
            className="bg-pink-50"
            required
          />
          <TextInput
            name="partnerBiodataId"
            placeholder="Partner Biodata ID"
            value={formData.partnerBiodataId}
            onChange={handleChange}
            className="bg-pink-50"
            required
          />
          <TextInput
            name="coupleImage"
            placeholder="Couple Image URL"
            value={formData.coupleImage}
            onChange={handleChange}
            className="bg-pink-50"
          />
          <Textarea
            name="successStory"
            placeholder="Share your experience..."
            value={formData.successStory}
            onChange={handleChange}
            className="bg-pink-50"
            required
          />
          <Button type="submit" color="pink" className="w-full bg-pink-200">
            Submit Story
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateStory;
