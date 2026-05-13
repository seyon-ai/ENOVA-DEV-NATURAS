// api/chat.js — Vercel Serverless Function
// Proxies requests to Groq API keeping key secret

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages, systemPrompt } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt || `You are ENOVA Dev AI — a sharp, concise, and encouraging coding tutor specializing in HTML, CSS, and JavaScript. 
            
Your style:
- Direct and practical, no fluff
- Use simple examples
- Point out mistakes gently but clearly
- Never write the full solution — guide with hints
- Use code snippets in backticks
- Keep responses under 200 words unless a detailed explanation is needed
- Celebrate wins with brief encouragement`
          },
          ...messages
        ],
        max_tokens: 800,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq error:", err);
      return res.status(500).json({ error: "AI service error" });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("API handler error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
