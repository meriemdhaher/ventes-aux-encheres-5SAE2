import { Body, Caption, Container, Title } from "../../router";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { commonClassNameOfInput } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const ProductsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="pt-24 px-8">
        <Container>
          <div className="flex justify-between gap-8">
            <div className="w-1/2">
              <div className="h-[70vh]">
                <img src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <div className="w-1/2">
              <Title level={2} className="capitalize">
                Couple Wedding Ring
              </Title>
              <div className="flex gap-5">
                <div className="flex text-green ">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 customer reviews)</Caption>
              </div>
              <br />
              <Body>Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</Body>
              <br />
              <Caption>Item condition: New</Caption>
              <br />
              <Caption>Item Verifed: Yes</Caption>
              <br />
              <Caption>Time left:</Caption>
              <br />
              <div className="flex gap-8 text-center">
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>149</Title>
                  <Caption>Days</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>12</Title>
                  <Caption>Hours</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>36</Title>
                  <Caption>Minutes</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>51</Title>
                  <Caption>Seconds</Caption>
                </div>
              </div>
              <br />
              <Title className="flex items-center gap-2">
                Auction ends:
                <Caption>December 31, 2024 12:00 am</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Timezone: <Caption>UTC 0</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Price:<Caption>$200 </Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Current bid:<Caption className="text-3xl">$500 </Caption>
              </Title>
              <div className="p-5 px-10 shadow-s3 py-8">
                <form className="flex gap-3 justify-between">
                  <input className={commonClassNameOfInput} type="number" name="price" />
                  <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
                    <AiOutlinePlus />
                  </button>
                  <button type="submit" className={`py-3 px-8 rounded-lg ${"bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="details mt-8">
            <div className="flex items-center gap-5">
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("description")}>
                Description
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("auctionHistory")}>
                Auction History
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "liveChat" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("liveChat")}>
                Live Chat
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("reviews")}>
                Reviews(2)
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "moreProducts" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("moreProducts")}>
                More Products
              </button>
            </div>

            <div className="tab-content mt-8">
              {activeTab === "description" && (
                <div className="description-tab shadow-s3 p-8 rounded-md">
                  <Title level={4}>Description</Title>
                  <br />
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
                    growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
                    create and capture value. The market is open for players in every kind of field. Are you a collector.
                  </Caption>
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
                    growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
                    create and capture value. The market is open for players in every kind of field. Are you a collector.
                  </Caption>
                  <br />
                  <Title level={4}>Product Overview</Title>
                  <div className="flex justify-between gap-5">
                    <div className="mt-4 capitalize w-1/2">
                      <div className="flex justify-between border-b py-3">
                        <Title>category</Title>
                        <Caption>Category</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>height</Title>
                        <Caption> 200 (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>length</Title>
                        <Caption> 300 (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>width</Title>
                        <Caption> 400 (cm)</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>weigth</Title>
                        <Caption> 50 (kg)</Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>medium used</Title>
                        <Caption> Gold </Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>Price</Title>
                        <Caption> $50000 </Caption>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>Sold out</Title>
                        Yes
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>verify</Title>
                        No
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <Title>Create At</Title>
                        <Caption>December 31, 2024 12:00 am</Caption>
                      </div>
                      <div className="flex justify-between py-3">
                        <Title>Update At</Title>
                        <Caption>December 31, 2024 12:00 am</Caption>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="h-[60vh] p-2 bg-green rounded-xl">
                        <img src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "auctionHistory" && <AuctionHistory />}
              {activeTab === "liveChat" && <LiveChat />}

              {activeTab === "reviews" && <Reviews />}
              {activeTab === "moreProducts" && (
                <div className="more-products-tab shadow-s3 p-8 rounded-md">
                  <h1>More Products</h1>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export const AuctionHistory = () => {
  return (
    <>
      <div className="shadow-s1 p-8 rounded-lg">
        <Title level={5} className=" font-normal">
          Auction History
        </Title>
        <hr className="my-5" />

        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-5">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Bid Amount(USD)
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Auto
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">December 31, 2024 12:00 am</td>
                <td className="px-6 py-4">$200</td>
                <td className="px-6 py-4">Sunil Pokhrel</td>
                <td className="px-6 py-4"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};



export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null); // Track the review being edited
  const [notification, setNotification] = useState(null);

  // Fetch reviews from the backend
  const fetchReviews = async () => {
    const response = await fetch("http://localhost:8080/api/avis");
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);



  
////////////////////////////////////////////////////////
  // Handle posting a new review
  const handleAddOrUpdateReview = async () => {
    if (newComment.trim() !== "" && newRating > 0) {
      const newReview = {
        bidId: "someBidId", // Should be dynamically set based on the relevant bid
        rating: newRating,
        comment: newComment,
        userId: "You",
      };

      if (editingReviewId) {
        // Update existing review
        const response = await fetch(`http://localhost:8084/api/avis/${editingReviewId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        });
        const data = await response.json();
        setReviews((prevReviews) =>
          prevReviews.map((review) => (review.id === editingReviewId ? data : review))
        );
        setNotification("Review updated successfully!");
      } else {
        // Add new review
        const response = await fetch("http://localhost:8084/api/avis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        });
        const data = await response.json();
        setReviews((prevReviews) => [...prevReviews, data]);
        setNotification("Review added successfully!");
      }

      setNewComment("");
      setNewRating(0);
      setEditingReviewId(null);
    }
  };

  // Handle deleting a review with confirmation dialog
  const handleDeleteReview = async (reviewId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      await fetch(`http://localhost:8084/api/avis/${reviewId}`, {
        method: "DELETE",
      });
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
      setNotification("Review deleted!");
    }
  };

  // Handle setting a review for editing
  const handleEditReview = (review) => {
    setEditingReviewId(review.id);
    setNewRating(review.rating);
    setNewComment(review.comment);
  };

  // Display stars for rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`fa fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}`} />
    ));
  };

  // Get the appropriate user avatar image
  const getUserAvatar = (userId) => {
    return userId === "You"
      ? "https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
      : "https://cdn-icons-png.flaticon.com/128/236/236831.png";
  };

  return (
    <div className="relative bg-white shadow-lg p-8 rounded-lg my-8 max-w-3xl mx-auto border-t-4 border-green-500">
      <h2 className="text-2xl font-semibold mb-5 text-center">User Reviews</h2>
      
      {/* Toaster Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 border border-black">
          {notification}
        </div>
      )}

      {/* Review Submission/Editing Section */}
      <div className="bg-gray-100 p-5 rounded-lg mb-6 shadow-sm">
        <h3 className="font-medium text-lg mb-3">
          {editingReviewId ? "Edit Review" : "Leave a Review"}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <label className="text-gray-600">Rating:</label>
          <select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="w-full p-3 border rounded-md mb-3"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddOrUpdateReview}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          {editingReviewId ? "Update Review" : "Submit Review"}
        </button>
      </div>

      {/* Reviews Display Section */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review-item bg-white p-4 rounded-md shadow mb-4 flex items-start group"
          >
            {/* User Image */}
            <img
              src={getUserAvatar(review.userId)}
              alt="User profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{review.userId}</h4>
                <div className="flex gap-1">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
              <p className="text-sm text-gray-400 mt-1">
                {new Date(review.createdAt).toLocaleDateString()}{" "}
                {new Date(review.createdAt).toLocaleTimeString()}
              </p>
              {/* Edit/Delete Actions */}
              {review.userId === "You" && (
                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEditReview(review)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const notificationSound = new Audio("/audio.wav");

  // Fetch messages from the backend
  const fetchMessages = async () => {
    const response = await fetch("http://localhost:8080/api/commentaires");
    const data = await response.json();
    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);


  /////////////////////////////////////////////////







  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const newEntry = { userId: "You", description: newMessage };
      const response = await fetch("http://localhost:8082/api/commentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages, data]);
      setNewMessage("");
      setNotification("New message sent!");
      notificationSound.play();
    }
  };

  // Handle editing a message
  const handleEditMessage = async (messageId, newText) => {
    const updatedMessage = { id: messageId, description: newText, userId: "You" };
    const response = await fetch(`http://localhost:8082/api/commentaires/${messageId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMessage),
    });
    const data = await response.json();

    setMessages((prevMessages) =>
      prevMessages.map((msg) => (msg.id === messageId ? data : msg))
    );
    setNotification("Message updated!");
  };

  // Handle deleting a message with confirmation
  const handleDeleteMessage = async (messageId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      await fetch(`http://localhost:8082/api/commentaires/${messageId}`, {
        method: "DELETE",
      });
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== messageId));
      setNotification("Message deleted!");
    }
  };

  // Helper function to get a static avatar based on userId
  const getUserAvatar = (userId) => {
    return userId === "You"
      ? "https://cdn-icons-png.flaticon.com/128/6997/6997662.png"  // Replace with actual path for "You"
      : "https://cdn-icons-png.flaticon.com/128/236/236831.png"; // Replace with actual path for other users
  };

  return (
    <div className="relative shadow-s1 p-8 rounded-lg h-[60vh] flex flex-col">
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 border border-black">
          {notification}
        </div>
      )}

      <h5 className="font-normal">Live Chat for Biddings</h5>
      <hr className="my-5" />

      <div className="flex-grow overflow-y-auto mb-5 p-3 bg-gray-100 rounded-lg">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 mb-3 ${msg.userId === "You" ? "text-right flex-row-reverse" : ""}`}>
            <img
              src={getUserAvatar(msg.userId)}
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="bg-white p-2 rounded-md inline-block relative group">
              <p className="font-bold">{msg.userId === "You" ? "You" : msg.userId}:</p>
              {msg.description}
              {msg.userId === "You" && (
                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => handleEditMessage(msg.id, prompt("Edit message:", msg.description))}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(msg.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="flex-grow p-3 border rounded-md"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-green px-8 py-2 rounded-full text-primary shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};


