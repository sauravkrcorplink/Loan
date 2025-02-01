// export default async function handler(req, res) {
//     try {
//       const { panNumber, aadharNumber } = req.body;
  
//       // Implement the Name Match API call here
//       // Replace this with your actual API endpoint and request structure
//       const response = await fetch("https://api.your-namematch-service.com/match", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer YOUR_API_KEY`, // Add your API key
//         },
//         body: JSON.stringify({ panNumber, aadharNumber }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       if (data.match) {
//         res.status(200).json({ match: true });
//       } else {
//         res.status(200).json({ match: false });
//       }
//     } catch (error) {
//       console.error("Error fetching Name Match API:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   }
  