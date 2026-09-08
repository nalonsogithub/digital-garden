---
title: "From Prediction to Agency"
date: "2026-09-08"
summary: "A draft essay on frontier language models: each stage in their development answered a limit hit by the previous one, and each answer changed what a model is. It ends with the question the companion essays set up: whether a learned model of human behavior could become a substrate for markets, and why reflexivity puts a ceiling on that."
pdf: ""
external_url: ""
tags: ["ai", "frontier models", "markets", "writing"]
category: "essays"
content_type: "essay"
track: "derived-borrowed-learned"
prompt: "from-prediction-to-agency"
---

From Prediction to Agency
What a Frontier Model Is, and Why the Definition Keeps Changing
"All models are wrong, but some are useful." - George E. P. Box
September 2026 (draft; the notes linked from this essay carry the parts that will go stale)
Nick Alonso

## I. Introduction: The Third Way to Get Structure

Two other essays in this library are about where the structure in a computation comes from. [[from-smooth-to-jagged|From Smooth to Jagged]] follows mathematics deriving structure from first principles, one new tool for each new roughness reality presented. [[the-resolution-of-reality|The Resolution of Reality]] follows quantum computing borrowing structure from physics, and finds that the advantage is largest exactly where the problem and the machine obey the same laws. This essay is about the third route. When nobody can derive the structure and nothing in nature happens to compute it, the remaining option is to learn it from data.

Language models are the most consequential instance of that route, and they are also the reason this essay is written differently from the other two. The Taylor series will be true next year. The list of frontier models will not. So the essay carries only the durable argument, and the [[frontier-lab-landscape|notes]] behind it carry the perishable facts, each with a date and a confidence level. Where a claim below depends on a specific model or benchmark, the note is the place to check whether it still holds.

The argument itself is a pattern. Each stage in the development of these models was a response to a limit the previous stage hit, and each response changed what "a model" is: from a text predictor, to an assistant, to a reasoner, to an agent that acts. The pattern has one more turn in it, and it is the turn that matters for the markets I work in. If a model can learn to behave like a human, then a population of such models might behave like a market, and the third route would start to look like the second. Section VII takes that possibility seriously. Section VIII explains why it has a ceiling that chemistry does not.

## II. Prediction: Scaling Laws and Their Two Limits

The first modern language models did one thing: predict the next token of text. The technical change that made them matter was not the objective but the discovery that performance on it improves along smooth power-law curves as parameters, data, and compute grow. Kaplan and colleagues published those curves in January 2020 [1]. GPT-3, at 175 billion parameters, followed in May and showed that a model trained only to predict text could perform tasks it had never been trained on, given a few examples in the prompt [2]. In 2022 the Chinchilla paper corrected the recipe: most models of the period had been undertrained on data, and a 70-billion-parameter model trained on 1.4 trillion tokens outperformed models several times its size [3].

Scaling hit two separate limits, and it is worth keeping them apart.

The first was usefulness. A model that predicts text well is not, by that fact, a model that does what you ask. The InstructGPT paper stated the problem in its first sentence: "Making language models bigger does not inherently make them better at following a user's intent" [4]. Raw capability and controllability turned out to be different properties.

The second was data. Epoch AI's estimate of the effective stock of public human text is on the order of 300 trillion tokens, and their projection is that frontier training runs exhaust it between 2026 and 2032, with a median near 2028 [5]. Ilya Sutskever put it more bluntly at NeurIPS 2024: pre-training as we know it will end, because we have but one internet. The response to this limit is the subject of Section VI; it is a live problem, not a solved one.

## III. Instruction: Preference Training

The response to the usefulness limit was to stop optimizing for text and start optimizing for human approval. InstructGPT (March 2022) fine-tuned the model on demonstrations, trained a reward model on human rankings of outputs, then used reinforcement learning against that reward [4]. The headline result was that a 1.3-billion-parameter model trained this way produced outputs people preferred to those of the 175-billion-parameter GPT-3. A hundredfold difference in size was outweighed by a change in what the model was optimized for.

Anthropic's Constitutional AI (December 2022) replaced the human harmlessness labels with model-generated critiques guided by a written set of principles, which made the training signal cheaper and more inspectable [6]. Reinforcement learning from human feedback and its AI-feedback variant became the standard second stage for every lab.

This stage's limit was reliability. The same InstructGPT paper noted that the model "still makes simple mistakes." The clearest number came later, from OpenAI's own launch page for its first reasoning model: GPT-4o, a mature product of this stage, solved 12% of the 2024 AIME competition problems [7]. The models were useful and fluent, and they could not be trusted on anything with several dependent steps.

## IV. Reasoning: Buying Accuracy With Inference Time

The response was to let the model think before it answers, and to train it to think well. Chain-of-thought prompting had shown in January 2022 that asking a model to write out intermediate steps improved multi-step accuracy [8]. The reasoning models of 2024 and 2025 turned that observation into a training objective: large-scale reinforcement learning on chains of thought with verifiable rewards, on math and code where an answer can be checked.

OpenAI's o1 (September 2024) reported 74% on AIME 2024 with a single sample and 83% with consensus over 64 samples, against GPT-4o's 12% [7]. DeepSeek-R1 (January 2025) showed that the behaviors emerge from reinforcement learning on a base model with no supervised warm start, and published the recipe [9]. The distinctive feature of this stage is that accuracy became a function of inference-time compute. A model could be made more accurate by letting it generate more tokens, which is a different economic object from a model whose accuracy is fixed at training.

Two limits are documented. The first is that reasoning collapses with problem complexity. Apple's "The Illusion of Thinking" (June 2025) found frontier reasoning models show complete accuracy collapse beyond certain complexity levels, and reduce their thinking effort as problems get harder even when budget remains [10]. The second is that the visible reasoning is not a faithful record of the computation. Anthropic found that Claude 3.7 Sonnet mentioned a decisive hint it had used in its chain of thought 25% of the time, and DeepSeek-R1 39% [11]. A model that reasons inside a single response can be wrong and cannot reliably tell you why. Verification had to come from outside.

## V. Agency: Acting, Observing, Acting Again

The response was to give the model tools and let it check its own work against the world. Function calling, screenshot-driven computer use (Anthropic, October 2024) [12], a common protocol for connecting models to tools (the Model Context Protocol, November 2024) [13], and reinforcement learning over long tool-using trajectories turned the model from something that produces a response into something that observes, acts, and observes again.

The measurement that fits this stage is not a benchmark score but a time horizon. METR's approach asks how long a task can be, measured in human-expert hours, before the model's success rate falls below a threshold [14]. The doubling time for that horizon has been on the order of four to seven months depending on the window measured, and by early 2026 the 50% horizon for the best models was about twelve hours.

The limits of this stage are the ones the field is living with now, and they deserve to be stated exactly.

Reliability falls faster than capability rises. The same model with a twelve-hour horizon at 50% success had a horizon near one hour at 80% success [14]. METR's own caution is that doubling the time horizon does not double the degree of automation. A task that succeeds half the time is not half automated; it is a task that still needs a person.

Measured productivity has not followed measured capability. In a randomized trial of experienced open-source developers using early-2025 tools, participants took 19% longer with the tools while believing they were 20% faster [15]. That result is one study of one population at one moment, and it should be read that way. But it is a warning against inferring deployment value from benchmark movement.

The benchmarks themselves are wearing out. In July 2026 OpenAI reported that about 30% of the tasks in SWE-Bench Pro were broken and withdrew its recommendation to use it, eight months after frontier pass rates had risen from 23% to 80% [16]. The o1 launch page had already retired MATH and GSM8K as no longer able to differentiate models in 2024. An evaluation that a frontier model can saturate in under a year is not measuring the frontier for long.

## VI. The Frontier Now: Five Moves, Not One

It would be tidy if the fifth stage were a single new paradigm. It is not. As of September 2026 the frontier is five concurrent moves, and the notes track each one.

**Capability tiers gated by safeguards.** The same model is now shipped at different levels of restriction to different users, with the more capable tier limited to vetted organizations in fields like cyber security and life sciences. What a model is now includes who may run which version of it. See [[anthropic-claude-models]] and [[google-deepmind-gemini]].

**Cost compression.** Per-token prices for frontier-adjacent models span nearly two orders of magnitude, and cached-input pricing has fallen far enough that long contexts are routine. Capability that was scarce in 2024 is a commodity in 2026. See [[openai-models]] and [[frontier-lab-landscape]].

**Open weights at multi-trillion-parameter scale.** Mixture-of-experts models with trillions of total parameters and around 50 to 100 billion active per token are released with permissive licenses, mostly from Chinese labs, and trail the closed frontier by months rather than years. See [[chinese-frontier-labs]].

**World models as a parallel track.** World Labs released Atlas on September 1, 2026: a multimodal model pretrained from scratch on text, images, video, and 3D that generates camera-controlled video and reconstructs scenes in three dimensions [17]. It is not a language model and not a successor to one. It is a separate bet that spatial prediction is a primitive on the order of next-token prediction. See [[world-models]] and [[atlas-world-labs]].

**Continual learning outside the weights.** No frontier lab documents online weight updates in a shipped model. Learning after deployment is implemented as memory and retrieval layered around a fixed model, and the research position is that a hybrid of in-context and in-weight learning is the likely destination [18].

The data limit from Section II runs under all five. The empirical answer so far is mixing: synthetic and reinforcement-learning-generated data extend pretraining when blended with human text, and collapse when used in a closed loop with no new signal [19]. That is a working practice, not a theory.

## VII. Learned Structure and the Market Question

Return to the three routes. Mathematics derives structure; quantum simulation borrows it; machine learning learns it. Markets are the case where only the third route has been open. There is no first-principles derivation of a price path that survives contact with data, which is the story the mathematics essay tells through Mandelbrot and [[rough-volatility|rough volatility]]. And there is no physical system that behaves like a market and can be run forward, so there is nothing to borrow. Every working market model is learned, and the quantitative finance I practice is the discipline of learning carefully.

The development traced in Sections II through V raises a new possibility. A market is an aggregate of human decisions under constraints. If language models have become good at reproducing human decisions, then a population of them, given the constraints, might reproduce the aggregate. The third route would produce a substrate, and modeling a market would start to resemble simulating a molecule: not deriving the behavior but running a system that has it. This is worth examining closely, because the evidence is real and so are its gaps.

**Individual behavior.** Park and colleagues built agents from two-hour interviews with 1,052 real people and found the agents reproduced those individuals' survey answers at 85% of the individuals' own two-week test-retest consistency, and replicated the treatment effects of five experiments [20]. Binz and colleagues fine-tuned a language model on ten million choices from 160 psychology experiments and found it predicted held-out human participants better than the domain-specific cognitive models built for each task, generalized to modified tasks, and failed, as it should, to predict the behavior of artificial agents [21]. What was not shown: economic games were the weakest domain in the first study, and the second is a predictive fit on laboratory tasks rather than a process model of a decision, a point its critics have pressed.

**Aggregate behavior.** TwinMarket put a hundred model-driven agents with beliefs, desires, and intentions into a simulated equity market linked by a social network, and reproduced four stylized facts of real markets (fat tails, negative return autocorrelation, the volume-volatility link, and volatility persistence) more closely than classical agent-based baselines [22]. Two 2026 studies ran frontier models as traders in classic bubble experiments and found disposition effects, extrapolative beliefs, and bubbles that could be amplified or suppressed by changing the agents' instructions [23][24]. What was not shown: no study reports pre-registered, out-of-sample forecasting of a real price series. The agents in TwinMarket had access to real news from the simulated period, so contamination from training data is not ruled out. And the second bubble study argues that model populations have a behavioral signature of their own, distinct from human animal spirits, which cuts against treating them as proxies for people.

The fair summary is that model populations reproduce the statistical signatures of markets and of individual biases. They do not, yet, predict a market. That is a substantial result and a long way from a substrate.

## VIII. Reflexivity: Why the Analogy Has a Ceiling

Suppose the gaps close. Suppose a population of learned agents reproduced not just the signatures of a market but its path. Quantum simulation would still have one property the market simulator could not have, and it is the property that makes the borrowed route work: the molecule does not respond to being simulated.

A market does. This is [[reflexivity]], and it has been stated three times in three literatures. Soros described a two-way feedback between participants' views and the events they try to predict [25]. Lucas showed that relationships estimated under one policy regime do not survive a change in regime, because agents re-optimize when the rules change [26]. Goodhart observed that any statistical regularity collapses once pressure is placed on it for control purposes [27]. Machine learning has its own formalization: Perdomo and colleagues call it performative prediction, where the act of predicting changes the distribution being predicted [28].

Applied to a market simulator, the consequence is exact. If the simulator is good and is used, it becomes one of the things market participants form expectations about. Its forecasts enter prices. The relationships it learned were relationships among participants who did not have it. The better and more widely adopted it is, the faster its own accuracy decays. The Financial Stability Board made the systemic version of this point in 2024: widespread use of models with similar behavior or training data could raise correlations, amplify volatility, and increase the probability of flash crashes [29]. The bubble studies show the mechanism in miniature, with model agents adapting to exploit the forecasting strategies of other model agents [24].

This is not an argument against modeling markets. It is a statement of what kind of object a market model is. It is a model of the market as it was, including the models then in use, and its value decays with adoption. A molecule's Hamiltonian does not change because someone computed it. The analogy between simulating a molecule and simulating a market is a good one right up to that sentence, and there it stops. Markets are permanently harder than chemistry in one specific way: the system reads the paper.

The practical implication is the one I already work under. Learned models of markets are provisional. Any regularity a model finds is partly a regularity of other models, and needs re-estimation rather than one-time discovery. The third route stays open, and it stays bounded, and the bound is not a limitation of current technology. It is a property of the thing being modeled.

The other two essays each end with a tool the author uses. This one ends with a constraint. That is the right ending for a draft about a subject that will have changed by the time it is read again, and it is the reason the notes behind this essay carry dates.

---

## References

- [1] Kaplan, J., et al. (2020). "Scaling Laws for Neural Language Models." arXiv:2001.08361.
- [2] Brown, T., et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165.
- [3] Hoffmann, J., et al. (2022). "Training Compute-Optimal Large Language Models." arXiv:2203.15556.
- [4] Ouyang, L., et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155.
- [5] Epoch AI. "Will we run out of data? Limits of LLM scaling based on human-generated data." Villalobos et al., ICML 2024; arXiv:2211.04325.
- [6] Bai, Y., et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." arXiv:2212.08073.
- [7] OpenAI (2024). "Learning to reason with LLMs." September 12, 2024.
- [8] Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903.
- [9] DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948; *Nature* 645, 633-638.
- [10] Shojaee, P., et al. (2025). "The Illusion of Thinking." Apple Machine Learning Research, June 2025.
- [11] Chen, Y., et al. (2025). "Reasoning Models Don't Always Say What They Think." Anthropic; arXiv:2505.05410.
- [12] Anthropic (2024). "Introducing computer use, a new Claude 3.5 Sonnet." October 22, 2024.
- [13] Anthropic (2024). "Introducing the Model Context Protocol." November 25, 2024.
- [14] METR (2025, 2026). "Measuring AI Ability to Complete Long Tasks" and "Time Horizon 1.1"; "Time horizon limitations" note, January 2026.
- [15] Becker, J., et al. (2025). "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." METR; arXiv:2507.09089.
- [16] OpenAI (2026). "Separating signal from noise in coding evaluations." July 8, 2026.
- [17] World Labs (2026). "Atlas: A World Model for Spatial Intelligence." September 1, 2026.
- [18] Dagstuhl position paper (2026). "Continual learning in foundation models." arXiv:2603.01761.
- [19] Shumailov, I., et al. (2024). "AI models collapse when trained on recursively generated data." *Nature* 631, 755-759. See also arXiv:2604.13977 (2026) on synthetic-data mixing.
- [20] Park, J. S., et al. (2024, rev. 2026). "Generative Agent Simulations of 1,000 People." arXiv:2411.10109.
- [21] Binz, M., et al. (2025). "A foundation model to predict and capture human cognition." *Nature* 644, 1002-1009.
- [22] Yang, Y., et al. (2025). "TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets." NeurIPS 2025; arXiv:2502.01506.
- [23] Ouyang, T., & Sui, P. (2026). "Dissecting AI Trading: Behavioral Finance and Market Bubbles." arXiv:2604.18373.
- [24] "Machine Spirits: Speculation and Adaptation of LLM Agents in Asset Markets" (2026). arXiv:2604.18602.
- [25] Soros, G. (2013). "Fallibility, reflexivity, and the human uncertainty principle." *Journal of Economic Methodology*, 20(4), 309-329.
- [26] Lucas, R. E. (1976). "Econometric Policy Evaluation: A Critique." *Carnegie-Rochester Conference Series on Public Policy*, 1, 19-46.
- [27] Goodhart, C. A. E. (1975). "Problems of Monetary Management: The UK Experience." Papers in Monetary Economics, Reserve Bank of Australia.
- [28] Perdomo, J. C., et al. (2020). "Performative Prediction." ICML 2020.
- [29] Financial Stability Board (2024). "The Financial Stability Implications of Artificial Intelligence." November 14, 2024.

*This essay is a draft in a knowledge base that is designed to grow. The lab and model notes it links to carry `last reviewed` dates; when they go stale, so does Section VI, and the rest should still stand.*
