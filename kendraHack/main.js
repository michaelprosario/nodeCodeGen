/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
GoogleGenerativeAI,
HarmCategory,
HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


const fs = require('fs');

var data;
try {
    data = fs.readFileSync('input.txt', 'utf8');
    //console.log(data);
} catch (err) {
    console.error(err);
}



  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {text: "\nReview the following user stories.  Extract the role, feature and benefit into different fields using this schema.   Return just the JSON:\n\n{\n  \"$schema\": \"http://json-schema.org/draft-2020-12/schema#\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"user\": {\n      \"type\": \"string\",\n      \"description\": \"The type of user who benefits from the story\"\n    },\n    \"feature\": {\n      \"type\": \"string\",\n      \"description\": \"The specific functionality the story delivers\"\n    },\n    \"benefit\": {\n      \"type\": \"string\",\n      \"description\": \"The value the user gains from the feature\"\n    }\n  },\n  \"required\": [\"user\", \"feature\", \"benefit\"]\n}\n\n\n\n  \n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Create a new blog post\",\n    \"benefit\": \"Share thoughts and ideas with readers\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Edit existing blog posts\",\n    \"benefit\": \"Correct errors or update information\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Delete a blog post\",\n    \"benefit\": \"Remove outdated or unwanted content\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Categorize blog posts\",\n    \"benefit\": \"Help readers easily find relevant content\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Add images and videos to blog posts\",\n    \"benefit\": \"Make posts more engaging and visually appealing\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Track views and comments on posts\",\n    \"benefit\": \"Understand audience engagement\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Publish blog posts at a specific time\",\n    \"benefit\": \"Optimize for reader engagement\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Add social sharing feature to blog posts\",\n    \"benefit\": \"Easily share content on social media\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Create a custom domain for the blog\",\n    \"benefit\": \"Appear more professional and memorable\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Add a commenting system to blog posts\",\n    \"benefit\": \"Interact with readers and get feedback\"\n  },\n  {\n    \"user\": \"Blogger\",\n    \"feature\": \"Use a WYSIWYG editor to format blog posts\",\n    \"benefit\": \"Easily create visually appealing content\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Browse through recent blog posts\",\n    \"benefit\": \"Discover new content\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Search for specific content\",\n    \"benefit\": \"Find what they are looking for\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Filter blog posts by category\",\n    \"benefit\": \"Easily find content that interests them\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Subscribe to a blog\",\n    \"benefit\": \"Get notified about new posts\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Share blog posts with friends and family\",\n    \"benefit\": \"Spread the word about interesting content\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Leave comments on blog posts\",\n    \"benefit\": \"Engage with the author and other readers\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"See the author's profile and other posts\",\n    \"benefit\": \"Learn more about their work\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Access the blog from a mobile device\",\n    \"benefit\": \"Read content on the go\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"Easily find and navigate through blog archives\",\n    \"benefit\": \"Access older content\"\n  },\n  {\n    \"user\": \"Reader\",\n    \"feature\": \"See the number of views and comments on a blog post\",\n    \"benefit\": \"Get an idea of its popularity\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Manage user accounts and roles\",\n    \"benefit\": \"Control access to the blog\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Configure blog settings (site name, logo, footer content)\",\n    \"benefit\": \"Customize the blog\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Moderate comments and prevent spam\",\n    \"benefit\": \"Maintain a high-quality discussion\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Integrate analytics tools\",\n    \"benefit\": \"Track website performance and user behavior\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Implement a security system to protect the blog from attacks\",\n    \"benefit\": \"Ensure data integrity and user safety\"\n  },\n  {\n    \"user\": \"Administrator\",\n    \"feature\": \"Add custom features to the blog\",\n    \"benefit\": \"Tailor it to their specific needs\"\n  },\n  {\n    \"user\": \"Trainer\",\n    \"feature\": \"Provide tutorials and documentation on how to use the blog platform\",\n    \"benefit\": \"Help new users get started easily\"\n  },\n  {\n    \"user\": \"Trainer\",\n    \"feature\": \"Create example blog posts to demonstrate different features and functionalities\",\n    \"benefit\": \"Help users learn by doing\"\n  },\n  {\n    \"user\": \"Trainer\",\n    \"feature\": \"Provide support and answer user questions\",\n    \"benefit\": \"Help users resolve issues and maximize their usage of the blog platform\"\n  }\n]\n```"},
        ],
      },
    ],
  });
  
  async function run() {
    const result = await chatSession.sendMessage(data);
    console.log(result.response.text());
  }
  
  run();
