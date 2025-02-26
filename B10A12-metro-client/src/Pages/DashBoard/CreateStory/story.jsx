// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { TextInput, Textarea, Button, Label, FileInput } from "flowbite-react";
// import { Helmet } from "react-helmet-async";
// import { GoChecklist } from "react-icons/go";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const CreateStory = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const axiosPublic = useAxiosPublic();
//   const axiosSecure = useAxiosSecure();

//   const onSubmit = async (data) => {
//     const file = data.image[0];
//     if (!file) {
//       console.error("No file uploaded!");
//       toast.error("Please upload a couple image.");
//       return;
//     }
//     console.log("Final Submitted Data with File:", data);

//     //image upload to imgbb and then get
//     const imageFile = { image: data.image[0] };
//     const res = await axiosPublic.post(image_hosting_api, imageFile, {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     });
//     if (res.data.success) {
//       // send story data to server with image url
//       const createStory = {
//         selfBiodataId: data.selfBiodataId,
//         partnerBiodataId: data.partnerBiodataId,
//         successStory: data.successStory,
//         image: res.data.data.display_url
//       };
      
//       const response = await axiosSecure.post('/successReview', createStory);
//       console.log(response.data)

//     if(response.data.insertedId){
//       //success popup
//       reset();
//       Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your story has been submitted successfully!",
//           showConfirmButton: false,
//           timer: 1500
//         });
//     }
//     else {
//       toast.error("Image upload failed, please try again.");
//     }
//   }
//     console.log( 'with image url', res.data);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Metro || Create Success Story</title>
//       </Helmet>
//       <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-200 lg:my-56">
//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
//           Got Married? Share Your Story!
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <TextInput
//             name="selfBiodataId"
//             placeholder="Your Biodata ID"
//             {...register("selfBiodataId", { required: true })}
//             className="bg-pink-50"
//             required
//           />
//           <TextInput
//             name="partnerBiodataId"
//             placeholder="Partner Biodata ID"
//             {...register("partnerBiodataId", { required: true })}
//             className="bg-pink-50"
//             required
//           />
//           {/* File Input for Image Upload */}
//           <div>
//             <Label htmlFor="file-upload" value="Upload Couple Image" />
//             <FileInput
//               id="file-upload"
//               accept="image/*"
//               {...register("image", { required: true })}
//               onChange={(e) => {
//                 console.log("File selected manually:", e.target.files);
//               }}
//               required
//             />
//           </div>
//           <Textarea
//             name="successStory"
//             placeholder="Share your experience..."
//             {...register("successStory", { required: true })}
//             className="bg-pink-50 h-40"
//             required
//           />
//           <Button type="submit" color="pink" className="w-full bg-pink-200">
//             Submit Story <GoChecklist className="ml-4 my-1" />
//           </Button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateStory;
