import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Table } from "flowbite-react";

const SuccessStories = () => {
  const [successStories, setSuccessStories] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await axiosSecure.get("/successReview");
        setSuccessStories(response.data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };

    fetchSuccessStories();
  }, []);

  const viewStory = (id) => {
    window.location.href = `/successReview/${id}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
        Success Stories
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <Table hoverable className="w-full border border-gray-200">
          <Table.Head className="text-white">
            <Table.HeadCell className="text-lg bg-pink-300">Male Biodata ID</Table.HeadCell>
            <Table.HeadCell className="text-lg bg-pink-300">Female Biodata ID</Table.HeadCell>
            <Table.HeadCell className="text-lg text-center bg-pink-300">View Story</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-gray-200">
            {successStories.length > 0 ? (
              successStories.map((story) => (
                <Table.Row
                  key={story._id}
                  className="bg-white hover:bg-gray-100 transition-all"
                >
                  <Table.Cell className="px-6 py-4 font-medium text-gray-800">
                    {story.selfBiodataId || "N/A"}
                  </Table.Cell>
                  <Table.Cell className="px-6 py-4 font-medium text-gray-800">
                    {story.partnerBiodataId || "N/A"}
                  </Table.Cell>
                  <Table.Cell className="px-6 py-4 text-center">
                    <button
                      onClick={() => viewStory(story._id)}
                      className="text-white bg-pink-400 hover:bg-pink-800 transition-all font-medium px-4 py-2 rounded-lg shadow-md"
                    >
                      View Story
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={3} className="text-center py-4 text-gray-500">
                  No success stories available.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default SuccessStories;
