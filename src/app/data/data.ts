interface Idata {
    id: string,
    heading: string,
    image: string,
    usecase: string,
    description: string,
    date: string,
    createdby : string,
    tittle : string
}

export const Data :Idata[] = [
    {
        id: "1",
        heading: " Chat GPT",
        image: "/images.jpeg",
        usecase: "AI-powered conversational agent for answering queries, generating text, and assisting in coding or creative tasks.",
        description: "ChatGPT is a conversational AI model developed by OpenAI, launched in November 2022. It is based on the GPT (Generative Pre-trained Transformer) architecture and is designed to generate human-like text based on the input it receives. ChatGPT can perform a wide range of tasks, including answering questions, engaging in natural language conversations, generating content, providing coding assistance, and writing articles. It is widely used in customer service, education, and content creation.",
        date: "November 30 2022",
        createdby: "OpenAI",
        tittle:"ChatGPT: Revolutionizing Conversations with AI-Powered Intelligence",


    },
    {
        id: "2",
        heading: " Github- Copilot",
        image: "/download.jpeg",
        usecase: "AI-powered coding assistant for writing and suggesting code.",
        description: "GitHub Copilot is an AI-powered code assistant developed by GitHub in collaboration with OpenAI. It uses machine learning to suggest code snippets, functions, and entire blocks of code based on the context of your programming. This tool integrates with popular code editors like VS Code to help developers write efficient and accurate code faster.",
        date: "June 29, 2021",
        createdby: "GitHub (in collaboration with OpenAI)",
        tittle: "GitHub Copilot: Your AI-Powered Coding Assistant",
    }, {
        id: "3",
        heading: "DALL-E",
        image: "/dall-e.png",
        usecase: "Generates images from text descriptions.",
        description: "DALL-E is a generative AI model developed by OpenAI that creates high-quality images from textual descriptions. It is based on the GPT (Generative Pre-trained Transformer) architecture, specifically fine-tuned for image generation tasks. DALL-E can produce creative, realistic, and artistic visuals, making it useful for applications in design, art, and storytelling.",
        date: "January 5, 2021",
        createdby :"OpenAI",
        tittle:"DALL-E: Unleashing Creativity Through AI-Generated Images",
    }, {
        id: "4",
        heading: " NVIDIA",
        image: "/download (1).jpeg",
        usecase: "Creates realistic landscapes from simple sketches",
        tittle:"NVIDIA: Pioneering Innovation in GPUs and Artificial Intelligence",
        description: "NVIDIA is a multinational technology company founded in 1993, specializing in designing and manufacturing GPUs (Graphics Processing Units) and AI hardware. It is a leader in gaming, artificial intelligence, high-performance computing, and autonomous systems. NVIDIA’s products, such as GeForce GPUs and CUDA software, are widely used in gaming, AI research, data centers, and industries like healthcare and automotive for innovative solutions",
        date: "March 2019",
        createdby :"Jensen Huang, Chris Malachowsky, Curtis Priem"
    }, {
        id: "5",
        heading: "MidJourney",
        image: "/midjourney.webp",
        usecase: "AI art generator specializing in creative and artistic styles.",
        description: "MidJourney is a generative AI tool designed for creating artistic and highly stylized images from textual prompts. It uses advanced machine learning models to transform text descriptions into visually appealing, creative artworks. MidJourney is particularly popular among artists, designers, and creators for exploring unique aesthetics and ideas. It operates primarily through Discord, allowing users to interact with the AI in a collaborative and user-friendly environment.",
        date: "Mid 2022",
        tittle:"MidJourney: Redefining Artistic Expression with Generative AI",
        createdby : " David Holz"
    },
]