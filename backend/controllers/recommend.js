const axios = require("axios").default

const createReco = async (req, res) => {

    const { user_text } = req.body
    
    try {
        
        const options = {
          method: "POST",
          url: "https://api.edenai.run/v2/text/generation",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.EDEN_API_KEY}`,
          },
          data: {
            show_original_response: true,
            fallback_providers: "",
            providers: "cohere",
            text: user_text,
            temperature: 0.2,
            max_tokens: 4000,
          },
        };
        
        const response = await axios.request(options)
        const responseData = await response.data.cohere.generated_text

        console.log(responseData)

        res.status(200).json(responseData)
        
    } catch (error) {
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
        } else if (error.request) {
            console.log('No response received');
        } else {
            console.error('Error:', error.message);
        }
        res.status(403).json({ error: 'Access denied or other issues with the request' });
    }
}

module.exports = { createReco }
