import axios from "axios";

const API_URL = "https://iunfuggxwfqqbdhpjuef.supabase.co/rest/v1/Reviews";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bmZ1Z2d4d2ZxcWJkaHBqdWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzM2NTIsImV4cCI6MjA2NjQwOTY1Mn0.RlUys65WokFLdtHGQMJtAuFpLt8YQ0H7_r9evsJBJAg";

const baseHeaders = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const reviewsAPI = {
  async fetchReviews() {
    const res = await axios.get(API_URL, { headers: baseHeaders });
    return res.data;
  },

  async createReview(data) {
    // data harus dalam array agar Supabase REST API terima
    const res = await axios.post(
      API_URL,
      [data],
      {
        headers: {
          ...baseHeaders,
          Prefer: "return=representation",
        },
      }
    );
    return res.data;
  },

  async deleteReview(id) {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers: baseHeaders });
    return res.data;
  },
};
