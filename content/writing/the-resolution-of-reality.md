---
title: "The Resolution of Reality"
date: "2026-07-06"
summary: "A primer on quantum computing: how physical law replaces brute-force search, and where hybrid classical-quantum architectures fit."
pdf: "/papers/the-resolution-of-reality.docx"
external_url: ""
tags: ["quantum", "physics", "writing"]
category: "essays"
content_type: "essay"
---

The Resolution of Reality 
A Primer on Quantum Computing
"There is no need to build a labyrinth when the entire universe is one." - Jorge Luis Borges, from The Aleph
July 6th, 2026 
Nick Alonso

## I. The Problem of Scale: The Lock on the World
Every time you send a credit card number or a private message across the internet, you are relying on a mathematical lock known as RSA Encryption [Appendix A: The Mathematics of RSA]. [1]
The security of this lock rests on a single, widely believed assumption: that factoring large integers is computationally infeasible for classical computers. To create a lock, a computer takes two huge prime numbers and multiplies them together to create a massive "Public Key." To break the code, a hacker must work backward, taking that massive number and splitting it back into its two original factors. 
Without knowing the prime numbers, the hacker is working blind. There is no efficient mathematical map to guide them toward the answer; even the most advanced classical methods amount to a search far too long to ever finish.
While the solution is simple, the difficulty lies in the scale. Modern RSA keys are typically 2048 bits long. Written out, this is a number roughly 617 digits long.
The number of atoms in the observable universe is roughly1080.
The total pool of numbers to check for a 2048-bit key is roughly 10617. 
This represents a hard physical limit on computation. As the classic analogy goes: even if you turned every atom in the observable universe into a supercomputer and let them run for the entire age of the cosmos, they would still fail to make a dent in the problem. 
[Note: Strictly speaking, a hacker only needs to search up to the square root of the number. However, even with that reduction, the search space remains exponentially larger than the physical resources of the universe.]

## II. The Classical Reality: The Physical Cost
Why is this problem so hard for a classical computer? Because each classical bit can hold only one definite value at a time, the machine must check potential answers sequentially. Even though it is fast at a single operation, there are so many potential answers (10617) that there is not enough time to check them all. 
The Physical Cost: We often think of software as abstract, but in a classical computer, information is physical. A number is stored in bits, and a bit is implemented using a transistor. You can think of a transistor as a microscopic bucket for electrons.
To represent a 1, the computer pushes electrons into the bucket.
To represent a 0, it drains the bucket.
To check just one guess, the computer must physically fill its transistors with electrons to represent that specific number, run the division calculation, and then drain the buckets to reset them for the next number. 
To find the answer, the computer must repeat this "fill and drain" process for a massive fraction of the possibilities until it finds the one that works. It is like looking for a particular grain of sand in a desert when the solution sets are so large.
Note: This laborious guessing process is actually the same mechanism used in Blockchain Mining (Proof of Work). Bitcoin secures its network by forcing computers to expend energy filling and draining these "buckets" to find a random number (Hash). In cryptocurrency, this difficulty is the main feature, as the blockchain is secured by a chain of these hashed puzzles.

## III. The Quantum Shift: Physics Solving Physics 
Quantum computing approaches this problem in a fundamentally different way: it uses the laws of physics to solve the problems of physics.
If the classical approach is like looking for a specific grain of sand by checking each one, the quantum approach is like placing that sand on a metal plate (Chladni plate) and vibrating it.
You don't need to touch the sand. Through the application of specific frequencies, you can get the sand to naturally move away from the "wrong" spots, revealing the "right" spots where the answer lies.
A quantum computer does not examine solutions individually. Instead, it represents many possibilities at once and manipulates them as a single physical system to reveal the right answer.
The Qubit: The quantum equivalent to the classical bit is called a qubit. Like a classical bit, the qubit is a physical object and ultimately produces a 0 or a 1 when finally measured. However, before measurement, the qubit's physical state exists in a combination of possibilities between 0 and 1. In simple terms, the qubit is not committed to being a 0 or a 1 yet; both outcomes remain physically possible until the act of measurement forces a choice.
Because each qubit is suspended in this state of possibility, we can manipulate them using physical laws. By applying specific forces (the algorithm), we coerce the system to resolve into the exact sequence of 0s and 1s that represents the correct answer.
To understand how this works in more detail, we need to look more closely at the physics involved. In the next sections, we will introduce three key concepts that form the foundation of quantum computing: superposition, entanglement, and coherence.

## IV. Superposition: Reality, Not Theory
The idea that a qubit can exist in a "combination of possibilities" has a name: superposition.
Superposition sounds abstract, but it describes a real physical behavior. Before a quantum system is measured, it does not need to commit to a single outcome. Multiple outcomes remain physically possible at the same time.
This behavior has been observed and tested repeatedly in experiments, the most famous of which is the Double-Slit Experiment. [2]
Young’s Double Slit Experiment: Imagine you are firing individual particles (like electrons) at a barrier with two narrow slits. Behind the barrier is a detector wall that records where each particle lands.
The Classical Expectation: If particles acted like tiny bullets, they would pass through either the left slit or the right slit. You would expect to see two simple piles of hits on the back wall, directly behind the openings.
The Quantum Reality: That is not what happens. Instead of two piles, the particles land all over the back wall in a series of alternating bright and dark stripes known as an interference pattern.
This pattern is identical to what happens when water waves pass through two openings. The waves ripple out, overlap, and interfere with each other, sometimes combining to make a bigger wave (bright stripe), sometimes canceling out (dark stripe). 

The Role of Measurement: However, this wave-like behavior is fragile. The key lesson from the experiment is that measurement, or interaction, changes the result. If you place a sensor at the slits to see which path the particle actually took, the wave collapses. The interference pattern disappears, and you are left with two simple piles of particles. In this sense, the detector forces the quantum particle, which was in a superposition of "left" and "right", to strictly become one or the other.

Connection to Computing: A classical bit must choose one path. But a qubit in superposition is the wave passing through both. It explores the pathway of 0 and the pathway of 1 at the same time.
We can think of the back wall as the landscape of all possible answers.
The slits represent the qubits.
The interference pattern on the wall represents the probability of finding the answer in a specific spot.
The more qubits we have, the more 'slits' we open, and the more of the wall gets exposed. As long as we have enough slits (qubits), we can see the entire 'wall' of possible answers. In our RSA encryption example, the slits represent the qubits that will eventually reveal the 0s and 1s of the correct encryption key 
The next step is to make sure that all of these qubits are aware of each other, so that they can work together to represent the complex pattern of the solution as a single, unified system that encompasses all possible answers. This is called entanglement.
## V. Entanglement: When Systems Stop Being Separate
Superposition allows a single qubit to explore two possibilities at once. But meaningful problems require checking trillions of possibilities. To do this, we need multiple qubits working together as a single team. This linking is called entanglement. [Appendix B: Entanglement & Breaking the Logic Barrier]
The "Single Entity": When qubits are entangled, they stop acting as independent objects and behave as a single physical system. This is much more than a simple physical connection. Entanglement is measured by correlations, and in quantum mechanics, the correlation among entangled objects is significantly stronger than any classical interpretation would allow. In fact, these correlations are so strong that, assuming the objects stay in superposition, they will continue to influence each other regardless of the distance between them, even if separated by the physical expanse of the universe. (Importantly, this link cannot be used to send messages faster than light; it reveals itself only in the correlations between measurements.) This is where Einstein's famous objection about "spooky action at a distance" came from.
Returning to the Double Slit: How does this help us solve the encryption problem? We can visualize the power of entanglement by returning to our Double Slit Experiment.
1 Qubit = 2 Slits: A single qubit in superposition is like a barrier with two slits. The wave passes through both (representing 0 and 1) simultaneously.
Entanglement = Adding Slits: When we entangle qubits, we are mathematically adding more "slits" to the barrier.
Two entangled qubits create 4 possible paths (00, 01, 10, 11).
Three entangled qubits create 8 paths.
With roughly 2,000 entangled qubits, we create a barrier with 10617 slits. (In practice, Shor’s algorithm uses roughly double that, about 4,000 logical qubits, to read the pattern reliably [Appendix D].)

The Massive Wave: The quantum computer acts as a single, massive wave passing through all of these slits simultaneously. This is why entanglement is the engine of quantum computing. It expands the "solution space" (the back wall) from a simple pattern of black-and-white stripes into a canvas complex enough to reveal the prime factors we are looking for.
The Challenge - Fragility: However, maintaining such a system in a delicate state of superposition is extremely hard. The more qubits that are added, the more complex and fragile the system becomes. If any other physical object - air molecules, heat, stray magnetic fields, interacts with the system in this delicate state, the synchronization breaks, the wave collapses, and the complex interference pattern dissolves into noise. This challenge of maintaining the system is known as Coherence.
Note on "Logical" Qubits: Throughout this paper, when we discuss the number of qubits required (e.g., 4,000 for encryption), we are referring to Logical Qubits. In the real world, physical qubits are prone to error. To create one perfect "Logical Qubit" that can hold a value without breaking, engineers often need to tie together thousands of "Physical Qubits" to correct for noise. Building a machine with enough physical qubits to create these logical units is the primary engineering challenge of the next decade.
## VI. Coherence: The Challenge
For superposition, entanglement, and probability shaping to work, the qubits must remain in a delicate state where their quantum properties are not forced to choose a definite value. This fragile condition is known as Coherence. [3]
The Environment is a Detector: The problem is that the universe is hostile to these states. Recall from the Double Slit experiment that if a detector "peeks" at the particle, the wave collapses. In a real quantum computer, you don't need a deliberate detector to ruin the experiment.
Heat (vibrating atoms)
Electromagnetic radiation (WiFi signals)
Stray particles (Cosmic rays)
All of these act like unintended measurements. Even a single interaction with a stray heat photon effectively asks the qubit, "Are you a 0 or a 1?"
When that happens, the qubit is forced to decide. Superposition collapses, entanglement breaks, and the coordinated quantum wave falls apart. The result on our "back wall" is no longer a sharp, high-resolution solution; it reverts to random noise.
This loss of quantum behavior is called Decoherence. It is not a theoretical limitation, but a physical one. It is the primary engineering challenge standing between today’s experimental devices and the quantum machines of the future.

## VII. The Solution: Shaping Probabilities
At this point, thanks to entanglement, our quantum computer is holding a vast landscape of possibilities, a "back wall" covered in 10617 potential answers. But right now, the wave is spread equally. Every answer looks the same. If we measured the system now, we would just get random noise.
How do we guide the system toward the one right answer?
The Algorithm as a Lens: A quantum computer does not search sequentially. Instead, it uses interference, a controlled method of reshaping the likelihood of different outcomes.
To visualize this, we return to the Double Slit Experiment. Imagine placing a series of optical lenses between the slits (the qubits) and the back wall.
We haven't looked at the answer yet; we are simply applying these lenses to "bend" the waves passing through the system, adjusting their phases so they focus on a single bright point on the wall.
Note: What is the "Lens" made of? In the actual hardware, there are no glass lenses. Instead, engineers use Quantum Gates. These are precise pulses of energy (microwaves or lasers) applied to the qubits. By hitting a qubit with a specific pulse, we rotate its state, mathematically shifting its wave phase. A quantum algorithm is simply a sequence of these pulses designed to create the interference pattern we want.
How Do We Shape the Lenses? And how do we know where to place the lenses if we don't know the answer? We use the rules of the problem itself.
To understand this, consider the challenge of designing a new drug molecule. We may not know the final, stable shape of the molecule, but we do know the physics that govern it. We know that two atoms cannot occupy the same space, and we know that like charges repel, etc. We build these physical constraints into the algorithm. These rules act as the lenses.
Destructive Interference (High Energy): Consider a configuration where the molecule is folded so that atoms are crashing into each other. This is physically "impossible" or high-energy. The algorithm uses this physical constraint to shift the wave phases so that these answers cancel out.
Constructive Interference (Low Energy): Now consider the configuration where the atoms fit together perfectly, the stable, low-energy shape. The algorithm aligns the waves for this outcome.
The Result: Nature Finds a Way - Nothing is removed explicitly. No configuration is deleted. Instead, the system mimics nature's own tendency to settle into a stable state. When we finally measure the system, we don't find a random result. Because the "stable" wave (the low-energy solution) has been amplified by our lenses, it dominates the probability distribution.

## VIII. Limits and Opportunities: What Quantum Computing Can, and Cannot, Do
Quantum computing is powerful, but it is not a magic oracle. It does not work by checking every possible answer simultaneously. For a quantum algorithm to work, the problem must have a hidden mathematical structure, or "Codable Laws", that we can exploit to create interference.
You cannot build a lens for a problem that has no shape.
Structured Problems: In the RSA encryption example, the system is defined by exact mathematical relationships (prime factors). In the drug discovery example, the system is defined by the forces of physics. We can code these rules into the algorithm to focus the wave on the correct solution
Unstructured Problems: If a problem is truly random (like finding a specific name in an unsorted pile of paperwork), there is no mathematical structure to "focus" on. The wave cannot be focused in a single stroke, and the best a quantum computer can offer is the modest quadratic speedup of Grover’s algorithm [Appendix D], useful but far from exponential.
Because of this, quantum computing is not a universal replacement for classical machines, but a specialized tool for specific domains:
Nature’s Home Court: Chemistry and Medicine: The most transformative opportunity lies in drug discovery and materials science. At the molecular level, chemistry is quantum mechanical. A classical computer struggles to simulate a drug molecule because it has to approximate the complex quantum behavior using rigid math. A quantum computer doesn't have to approximate. It simulates the molecule by becoming the molecule. [4] It uses its own physics to mirror the physics of the drug. This could accelerate the design of targeted therapies, enabling patient-specific treatments tailored to an individual’s molecular profile.
"Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy." — Richard Feynman [7]
Imposing Structure: Logistics and Optimization: Beyond physics, quantum computers are also adept at solving problems like global logistics or financial portfolio optimization. While these problems aren't "physical" in the literal sense, they have mathematical structures (constraints, costs, dependencies) that can sometimes be mapped onto quantum states. 

## IX. Conclusion: The Hybrid Architecture
Ultimately, the goal of quantum computing is not to replace classical computers, but to complete them.
The emerging model is a Hybrid Architecture where the quantum computer functions as a Specialized Accelerator, similar to a modern GPU (Graphics Processing Unit). [5] Just as a standard CPU offloads heavy graphics or AI tasks to a GPU, future supercomputers will offload specific problems of scale to a QPU (Quantum Processing Unit). [Appendix C: The Hardware Race (Types of Physical Qubits)]
In this workflow, the classical computer retains control over logic, operating systems, and data storage. It only triggers the QPU when it hits a barrier of scale, such as factoring a massive number or simulating a complex molecule. The QPU applies the "lenses" of interference to isolate the solution and returns the result to the classical system. [Appendix D: The Software (Key Quantum Algorithms)]
This approach leverages the best of both physical regimes: the rock-solid reliability of classical bits for general computing, and the probabilistic power of qubits for the problems that are simply too big to count.

---

*Full appendices (RSA mathematics, entanglement, hardware race, key algorithms) are in the downloadable paper.*
