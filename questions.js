const satQuestions = {
    math: {
        easy: [
            {
                question: "If 2x + 6 = 14, what is the value of x?",
                answers: ["3", "4", "5", "8"],
                correct: 1,
                explanation: "Solve for x: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4."
            },
            {
                question: "What is 15% of 80?",
                answers: ["8", "10", "12", "15"],
                correct: 2,
                explanation: "15% of 80 = 0.15 × 80 = 12"
            },
            {
                question: "If a rectangle has length 8 and width 5, what is its area?",
                answers: ["13", "26", "35", "40"],
                correct: 3,
                explanation: "Area = length × width = 8 × 5 = 40 square units"
            },
            {
                question: "What is the value of 3² + 4²?",
                answers: ["25", "14", "12", "49"],
                correct: 0,
                explanation: "3² + 4² = 9 + 16 = 25"
            },
            {
                question: "If y = 2x + 1 and x = 3, what is y?",
                answers: ["5", "6", "7", "8"],
                correct: 2,
                explanation: "Substitute x = 3: y = 2(3) + 1 = 6 + 1 = 7"
            },
            {
                question: "What is the median of: 3, 7, 2, 9, 5?",
                answers: ["2", "5", "7", "9"],
                correct: 1,
                explanation: "Arrange in order: 2, 3, 5, 7, 9. The median is the middle value: 5"
            },
            {
                question: "Simplify: 12 ÷ 3 × 2",
                answers: ["2", "4", "6", "8"],
                correct: 3,
                explanation: "Following order of operations: 12 ÷ 3 = 4, then 4 × 2 = 8"
            },
            {
                question: "What is the perimeter of a square with side length 6?",
                answers: ["12", "18", "24", "36"],
                correct: 2,
                explanation: "Perimeter of square = 4 × side = 4 × 6 = 24"
            },
            {
                question: "If 5x = 35, what is x?",
                answers: ["5", "6", "7", "8"],
                correct: 2,
                explanation: "Divide both sides by 5: x = 35 ÷ 5 = 7"
            },
            {
                question: "What is 25% of 200?",
                answers: ["25", "50", "75", "100"],
                correct: 1,
                explanation: "25% = 1/4, so 200 ÷ 4 = 50"
            },
            {
                question: "Round 3.67 to the nearest whole number",
                answers: ["3", "3.5", "3.7", "4"],
                correct: 3,
                explanation: "3.67 is closer to 4 than to 3"
            },
            {
                question: "What is the sum of angles in a triangle?",
                answers: ["90°", "180°", "270°", "360°"],
                correct: 1,
                explanation: "The sum of angles in any triangle is always 180°"
            },
            {
                question: "If a = 4 and b = 3, what is a² - b²?",
                answers: ["1", "5", "7", "25"],
                correct: 2,
                explanation: "a² - b² = 16 - 9 = 7"
            },
            {
                question: "What is the slope of a horizontal line?",
                answers: ["0", "1", "-1", "undefined"],
                correct: 0,
                explanation: "Horizontal lines have slope = 0 (no rise)"
            },
            {
                question: "Convert 3/4 to a decimal",
                answers: ["0.34", "0.5", "0.75", "0.8"],
                correct: 2,
                explanation: "3 ÷ 4 = 0.75"
            }
        ],
        medium: [
            {
                question: "If 3x + 7 = 22, what is the value of x?",
                answers: ["3", "5", "7", "15"],
                correct: 1,
                explanation: "Solve for x: 3x + 7 = 22. Subtract 7: 3x = 15. Divide by 3: x = 5."
            },
            {
                question: "A circle has radius 6. What is its area in terms of π?",
                answers: ["12π", "36π", "24π", "6π"],
                correct: 1,
                explanation: "Area = πr² = π(6)² = 36π square units"
            },
            {
                question: "If f(x) = 2x² - 3x + 1, what is f(2)?",
                answers: ["3", "5", "7", "9"],
                correct: 0,
                explanation: "f(2) = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3"
            },
            {
                question: "The average of 5 consecutive integers is 12. What is the largest?",
                answers: ["14", "15", "16", "13"],
                correct: 0,
                explanation: "If average is 12, the middle number is 12. The five are: 10, 11, 12, 13, 14"
            },
            {
                question: "If 2^x = 32, what is x?",
                answers: ["4", "5", "6", "8"],
                correct: 1,
                explanation: "32 = 2^5, therefore x = 5"
            },
            {
                question: "What is the slope of the line passing through (2, 3) and (6, 11)?",
                answers: ["1", "2", "3", "4"],
                correct: 1,
                explanation: "Slope = (11-3)/(6-2) = 8/4 = 2"
            },
            {
                question: "If |2x - 6| = 10, what are the possible values of x?",
                answers: ["8 and -2", "8 and 2", "-2 and 3", "8 only"],
                correct: 0,
                explanation: "Either 2x - 6 = 10 (x = 8) or 2x - 6 = -10 (x = -2)"
            },
            {
                question: "A store offers 20% off, then 10% off the reduced price. What's the total discount on a $100 item?",
                answers: ["$30", "$28", "$25", "$32"],
                correct: 1,
                explanation: "After 20% off: $80. After 10% off $80: $72. Total discount: $28"
            },
            {
                question: "If x² - 5x + 6 = 0, what are the values of x?",
                answers: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"],
                correct: 0,
                explanation: "Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3"
            },
            {
                question: "In a 30-60-90 triangle, if the shortest side is 4, what is the hypotenuse?",
                answers: ["4√2", "4√3", "8", "6"],
                correct: 2,
                explanation: "In a 30-60-90 triangle, hypotenuse = 2 × shortest side = 8"
            },
            {
                question: "What is the distance between points (1, 2) and (4, 6)?",
                answers: ["3", "4", "5", "6"],
                correct: 2,
                explanation: "Distance = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5"
            },
            {
                question: "If log₂(x) = 3, what is x?",
                answers: ["6", "8", "9", "16"],
                correct: 1,
                explanation: "log₂(x) = 3 means 2³ = x, so x = 8"
            },
            {
                question: "The probability of event A is 0.3 and event B is 0.4. If they're independent, what's P(A and B)?",
                answers: ["0.7", "0.12", "0.1", "0.5"],
                correct: 1,
                explanation: "For independent events: P(A and B) = P(A) × P(B) = 0.3 × 0.4 = 0.12"
            },
            {
                question: "If sin(θ) = 3/5 in a right triangle, what is cos(θ)?",
                answers: ["4/5", "5/3", "3/4", "5/4"],
                correct: 0,
                explanation: "Using Pythagorean identity: cos(θ) = √(1 - sin²(θ)) = √(1 - 9/25) = 4/5"
            },
            {
                question: "What is the sum of the first 10 positive integers?",
                answers: ["45", "50", "55", "60"],
                correct: 2,
                explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55"
            }
        ],
        hard: [
            {
                question: "If x² + y² = 25 and x + y = 7, what is xy?",
                answers: ["12", "10", "8", "6"],
                correct: 0,
                explanation: "(x + y)² = x² + 2xy + y² = 49. Since x² + y² = 25, then 2xy = 24, so xy = 12"
            },
            {
                question: "How many ways can 5 people sit in a row?",
                answers: ["25", "60", "120", "125"],
                correct: 2,
                explanation: "This is 5! = 5 × 4 × 3 × 2 × 1 = 120"
            },
            {
                question: "If f(x) = x² and g(x) = 2x + 1, what is f(g(2))?",
                answers: ["25", "16", "9", "20"],
                correct: 0,
                explanation: "g(2) = 2(2) + 1 = 5, then f(5) = 5² = 25"
            },
            {
                question: "The sum of three consecutive odd integers is 69. What is the largest?",
                answers: ["23", "25", "27", "21"],
                correct: 1,
                explanation: "Let them be x, x+2, x+4. Sum = 3x + 6 = 69, so x = 21. Largest is 25"
            },
            {
                question: "If a²/b = 4 and ab = 8, what is a³?",
                answers: ["8", "16", "32", "64"],
                correct: 2,
                explanation: "From a²/b = 4 and ab = 8: a² = 4b and b = 8/a. Substituting: a³ = 32"
            },
            {
                question: "In how many ways can you choose 3 items from 6?",
                answers: ["18", "20", "120", "216"],
                correct: 1,
                explanation: "This is C(6,3) = 6!/(3!×3!) = 20"
            },
            {
                question: "If tan(x) = 3/4, what is sin(2x)?",
                answers: ["24/25", "7/25", "12/25", "3/5"],
                correct: 0,
                explanation: "sin(2x) = 2sin(x)cos(x). With tan(x) = 3/4, sin(x) = 3/5 and cos(x) = 4/5, so sin(2x) = 24/25"
            },
            {
                question: "What is the remainder when x³ - 2x² + x - 3 is divided by (x - 2)?",
                answers: ["-1", "1", "3", "5"],
                correct: 0,
                explanation: "Using remainder theorem, substitute x = 2: 8 - 8 + 2 - 3 = -1"
            },
            {
                question: "If the roots of x² + px + q = 0 are 3 and -5, what is p?",
                answers: ["-2", "2", "-8", "8"],
                correct: 1,
                explanation: "Sum of roots = -p. Since roots are 3 and -5, sum = -2, so p = 2"
            },
            {
                question: "A sequence starts 2, 6, 18, 54... What is the 6th term?",
                answers: ["162", "324", "486", "648"],
                correct: 2,
                explanation: "This is a geometric sequence with ratio 3. The 6th term = 2 × 3^5 = 486"
            }
        ]
    },
    reading: {
        easy: [
            {
                question: "What does the word 'benevolent' most likely mean?",
                answers: ["Angry", "Kind and helpful", "Confused", "Wealthy"],
                correct: 1,
                explanation: "Benevolent means well-meaning and kindly, showing goodwill"
            },
            {
                question: "The main purpose of a topic sentence is to:",
                answers: ["End the paragraph", "Introduce the main idea", "Provide evidence", "Ask a question"],
                correct: 1,
                explanation: "A topic sentence introduces and summarizes the main idea of a paragraph"
            },
            {
                question: "What type of text structure uses words like 'first, then, finally'?",
                answers: ["Compare/contrast", "Cause/effect", "Sequential/chronological", "Problem/solution"],
                correct: 2,
                explanation: "Sequential or chronological structure uses time-order words"
            },
            {
                question: "The word 'ambiguous' means:",
                answers: ["Very clear", "Having multiple meanings", "Angry", "Beautiful"],
                correct: 1,
                explanation: "Ambiguous means unclear or having more than one possible meaning"
            },
            {
                question: "What is the author's purpose in a persuasive text?",
                answers: ["To entertain", "To convince the reader", "To inform only", "To confuse"],
                correct: 1,
                explanation: "Persuasive texts aim to convince readers to agree with a viewpoint"
            },
            {
                question: "Context clues help readers:",
                answers: ["Skip difficult passages", "Understand unfamiliar words", "Read faster", "Memorize texts"],
                correct: 1,
                explanation: "Context clues are hints in the text that help determine word meanings"
            },
            {
                question: "A simile uses which words?",
                answers: ["Like or as", "But or however", "Therefore", "Although"],
                correct: 0,
                explanation: "Similes compare using 'like' or 'as' (e.g., 'brave as a lion')"
            },
            {
                question: "The main idea of a passage is:",
                answers: ["The first sentence", "A minor detail", "The central point", "The conclusion only"],
                correct: 2,
                explanation: "The main idea is the central point or message of the entire passage"
            },
            {
                question: "What does 'inference' mean?",
                answers: ["Copying text", "Drawing conclusions from evidence", "Summarizing", "Questioning"],
                correct: 1,
                explanation: "An inference is a conclusion based on evidence and reasoning"
            },
            {
                question: "The tone of a text refers to:",
                answers: ["Its length", "The author's attitude", "The font used", "The page number"],
                correct: 1,
                explanation: "Tone is the author's attitude toward the subject matter"
            }
        ],
        medium: [
            {
                question: "In context, 'ubiquitous' most nearly means:",
                answers: ["Rare", "Expensive", "Present everywhere", "Dangerous"],
                correct: 2,
                explanation: "Ubiquitous means existing or being everywhere at the same time"
            },
            {
                question: "The author's use of irony serves to:",
                answers: ["Clarify the argument", "Highlight a contradiction", "Provide evidence", "Introduce a topic"],
                correct: 1,
                explanation: "Irony often highlights contradictions or unexpected outcomes"
            },
            {
                question: "The phrase 'paradigm shift' refers to:",
                answers: ["A small adjustment", "A fundamental change in approach", "A temporary trend", "A scientific experiment"],
                correct: 1,
                explanation: "A paradigm shift is a fundamental change in basic concepts and practices"
            },
            {
                question: "The author would most likely agree that:",
                answers: ["All change is good", "Balance is necessary", "Technology is harmful", "Progress should stop"],
                correct: 1,
                explanation: "Authors often advocate for balanced approaches to complex issues"
            },
            {
                question: "The transition 'nevertheless' signals:",
                answers: ["Agreement", "Contrast", "Example", "Cause"],
                correct: 1,
                explanation: "'Nevertheless' introduces a contrasting or opposing point"
            },
            {
                question: "Rhetorical questions in the passage serve to:",
                answers: ["Confuse readers", "Engage the reader's thinking", "Provide answers", "End paragraphs"],
                correct: 1,
                explanation: "Rhetorical questions engage readers and provoke thought"
            },
            {
                question: "The author's tone can best be described as:",
                answers: ["Hostile", "Cautiously optimistic", "Completely neutral", "Sarcastic"],
                correct: 1,
                explanation: "Cautiously optimistic suggests hope with awareness of challenges"
            },
            {
                question: "The metaphor in line 15 compares:",
                answers: ["Two similar things", "Abstract to concrete", "Past to present", "Fiction to reality"],
                correct: 1,
                explanation: "Metaphors often make abstract concepts concrete and understandable"
            },
            {
                question: "The author develops the argument by:",
                answers: ["Stating opinions only", "Using evidence and examples", "Avoiding the topic", "Asking questions only"],
                correct: 1,
                explanation: "Strong arguments use evidence and examples for support"
            },
            {
                question: "The word 'ameliorate' most likely means:",
                answers: ["Worsen", "Improve", "Maintain", "Destroy"],
                correct: 1,
                explanation: "Ameliorate means to make something better or improve it"
            }
        ],
        hard: [
            {
                question: "The author's allusion to Greek mythology serves to:",
                answers: ["Entertain only", "Draw parallels to modern issues", "Confuse the reader", "Fill space"],
                correct: 1,
                explanation: "Allusions create connections between familiar stories and new concepts"
            },
            {
                question: "The juxtaposition of urban and rural imagery suggests:",
                answers: ["No difference exists", "A fundamental contrast", "Cities are superior", "Rural is better"],
                correct: 1,
                explanation: "Juxtaposition highlights contrasts and differences"
            },
            {
                question: "The author's use of synecdoche in paragraph 3:",
                answers: ["Weakens the argument", "Represents the whole by a part", "Changes the subject", "Adds humor"],
                correct: 1,
                explanation: "Synecdoche uses a part to represent the whole (e.g., 'all hands on deck')"
            },
            {
                question: "The paradox presented in the conclusion:",
                answers: ["Resolves all conflicts", "Highlights inherent contradictions", "Proves the thesis wrong", "Adds confusion"],
                correct: 1,
                explanation: "Paradoxes reveal seemingly contradictory truths"
            },
            {
                question: "The author's epistemological stance suggests:",
                answers: ["Knowledge is absolute", "Knowledge is constructed", "Knowledge is impossible", "Knowledge is irrelevant"],
                correct: 1,
                explanation: "Epistemology deals with how we know what we know"
            },
            {
                question: "The chiasmus in the opening paragraph:",
                answers: ["Creates rhythmic balance", "Confuses the meaning", "Weakens the impact", "Changes the topic"],
                correct: 0,
                explanation: "Chiasmus creates balance through reversed parallel structure"
            },
            {
                question: "The author's critique of empiricism implies:",
                answers: ["Data is everything", "Experience has limits", "Science is wrong", "Theory is useless"],
                correct: 1,
                explanation: "Critiques of empiricism often highlight the limitations of experience-based knowledge"
            },
            {
                question: "The metonymy 'The White House announced' means:",
                answers: ["The building spoke", "The President's administration", "Congress decided", "The Supreme Court ruled"],
                correct: 1,
                explanation: "Metonymy substitutes associated terms (White House = Presidential administration)"
            },
            {
                question: "The dialectical structure of the argument:",
                answers: ["Presents one side only", "Synthesizes opposing views", "Avoids controversy", "Repeats the same point"],
                correct: 1,
                explanation: "Dialectical arguments present thesis, antithesis, and synthesis"
            },
            {
                question: "The author's phenomenological approach emphasizes:",
                answers: ["Objective facts only", "Subjective experience", "Historical context", "Future predictions"],
                correct: 1,
                explanation: "Phenomenology focuses on subjective, lived experience"
            }
        ]
    },
    writing: {
        easy: [
            {
                question: "Choose the correct: 'The dog ____ its tail.'",
                answers: ["wag", "wags", "wagging", "wagged"],
                correct: 1,
                explanation: "Present tense, singular subject 'dog' requires 'wags'"
            },
            {
                question: "Which is correct: 'Your/You're going to love this!'",
                answers: ["Your", "You're", "Both are correct", "Neither"],
                correct: 1,
                explanation: "You're = you are. 'You are going to love this!'"
            },
            {
                question: "Select the correct punctuation: 'I love pizza__ I eat it every day.'",
                answers: [", (comma)", "; (semicolon)", ": (colon)", ". (period)"],
                correct: 3,
                explanation: "These are two complete sentences that need a period between them"
            },
            {
                question: "Which word is spelled correctly?",
                answers: ["Recieve", "Receive", "Recieve", "Receeve"],
                correct: 1,
                explanation: "Remember: 'i before e except after c' - receive is correct"
            },
            {
                question: "Choose: 'Neither of the students ___ finished.'",
                answers: ["has", "have", "having", "had"],
                correct: 0,
                explanation: "'Neither' is singular and takes a singular verb 'has'"
            },
            {
                question: "Which sentence is clearest?",
                answers: ["The very extremely big house", "The enormous house", "The big huge house", "The very big large house"],
                correct: 1,
                explanation: "One precise word is better than multiple vague modifiers"
            },
            {
                question: "Select: 'Between you and ___'",
                answers: ["I", "me", "myself", "mine"],
                correct: 1,
                explanation: "After prepositions like 'between,' use objective pronouns (me)"
            },
            {
                question: "Which uses apostrophes correctly?",
                answers: ["The dogs' bones", "The dog's bones", "The dogs bone's", "Both A and B"],
                correct: 3,
                explanation: "A = multiple dogs, B = one dog. Both can be correct depending on context"
            },
            {
                question: "Choose: 'Everyone brought ___ lunch.'",
                answers: ["their", "his or her", "there", "they're"],
                correct: 1,
                explanation: "'Everyone' is singular and needs singular pronouns"
            },
            {
                question: "Which is a complete sentence?",
                answers: ["Running quickly.", "The boy running.", "He runs.", "Although running."],
                correct: 2,
                explanation: "A complete sentence needs a subject and a verb. 'He runs' has both"
            }
        ],
        medium: [
            {
                question: "Choose the correct: 'The committee ___ its decision.'",
                answers: ["announce", "announces", "announcing", "have announced"],
                correct: 1,
                explanation: "Committee is a collective noun treated as singular in American English"
            },
            {
                question: "Which maintains parallel structure?",
                answers: ["She likes reading, writing, and to swim", "She likes reading, writing, and swimming", "She likes to read, writing, and swimming", "She likes read, write, and swim"],
                correct: 1,
                explanation: "All items should have the same grammatical form (gerunds)"
            },
            {
                question: "Select the most concise:",
                answers: ["Due to the fact that", "Because", "In light of the fact that", "Owing to the fact that"],
                correct: 1,
                explanation: "'Because' conveys the same meaning more concisely"
            },
            {
                question: "Which transition best shows contrast?",
                answers: ["Moreover", "Nevertheless", "Therefore", "Furthermore"],
                correct: 1,
                explanation: "'Nevertheless' indicates contrast or opposition"
            },
            {
                question: "Identify the correct use of semicolon:",
                answers: ["I love pizza; pepperoni is my favorite.", "I need; milk and eggs.", "The test; was difficult.", "She ran; to catch the bus."],
                correct: 0,
                explanation: "Semicolons connect related independent clauses"
            },
            {
                question: "Which pronoun agrees: 'Each student submitted ___ paper.'",
                answers: ["their", "his or her", "there", "its"],
                correct: 1,
                explanation: "'Each' is singular and requires singular pronouns"
            },
            {
                question: "Choose the active voice:",
                answers: ["The ball was thrown by John", "John threw the ball", "The ball has been thrown", "Thrown was the ball"],
                correct: 1,
                explanation: "Active voice: subject performs the action"
            },
            {
                question: "Which word is most precise for 'said angrily'?",
                answers: ["Shouted", "Snapped", "Spoke", "Mentioned"],
                correct: 1,
                explanation: "'Snapped' precisely conveys speaking angrily"
            },
            {
                question: "Select proper modifier placement:",
                answers: ["I only ate pizza", "I ate only pizza", "Only I ate pizza", "I ate pizza only"],
                correct: 1,
                explanation: "'Only' should be placed next to what it modifies"
            },
            {
                question: "Which combines sentences best: 'It was raining. We stayed inside.'",
                answers: ["It was raining, we stayed inside.", "Because it was raining, we stayed inside.", "It was raining; stayed inside.", "Raining, we stayed inside."],
                correct: 1,
                explanation: "Shows clear cause-and-effect relationship"
            }
        ],
        hard: [
            {
                question: "Which demonstrates proper subjunctive mood?",
                answers: ["If I was rich", "If I were rich", "If I am rich", "If I would be rich"],
                correct: 1,
                explanation: "Subjunctive mood uses 'were' for hypothetical situations"
            },
            {
                question: "Identify the dangling modifier:",
                answers: ["Running quickly, the finish line appeared", "The dog, barking loudly, scared me", "She ate the pizza slowly", "The book on the table is mine"],
                correct: 0,
                explanation: "The finish line isn't running; the modifier dangles"
            },
            {
                question: "Which uses the Oxford comma correctly?",
                answers: ["Red white and blue", "Red, white, and blue", "Red, white and, blue", "Red white, and blue"],
                correct: 1,
                explanation: "Oxford comma goes before 'and' in a series"
            },
            {
                question: "Select the correct conditional:",
                answers: ["If I would have known", "If I had known", "If I would know", "If I knew would have"],
                correct: 1,
                explanation: "Past perfect in if-clause for past hypotheticals"
            },
            {
                question: "Which maintains consistent point of view?",
                answers: ["One should do your best", "You should do your best", "One should do one's best", "You should do one's best"],
                correct: 2,
                explanation: "Maintain consistency: one...one's or you...your"
            },
            {
                question: "Identify correct use of 'whom':",
                answers: ["Whom is going?", "To whom it may concern", "Whom did you see?", "Both B and C"],
                correct: 3,
                explanation: "'Whom' is objective case, used as object of verb or preposition"
            },
            {
                question: "Which shows proper em dash usage?",
                answers: ["The solution - was obvious", "The solution—surprisingly simple—was obvious", "The solution — — was obvious", "The - solution was - obvious"],
                correct: 1,
                explanation: "Em dashes set off parenthetical elements"
            },
            {
                question: "Select the grammatically correct:",
                answers: ["Neither the students nor the teacher were ready", "Neither the students nor the teacher was ready", "Neither the students or the teacher was ready", "Neither students nor teacher were ready"],
                correct: 1,
                explanation: "With neither...nor, verb agrees with closer subject (teacher = singular)"
            },
            {
                question: "Which uses 'lie' vs 'lay' correctly?",
                answers: ["I will lay down", "I will lie down", "I will laid down", "I will lain down"],
                correct: 1,
                explanation: "'Lie' means to recline; 'lay' means to place something"
            },
            {
                question: "Identify the correct use of ellipsis:",
                answers: ["She said...nevermind", "She said ... 'I don't know.'", "She said, 'I don't ... know.'", "She...said...slowly"],
                correct: 2,
                explanation: "Ellipsis indicates omitted text within a quotation"
            }
        ]
    }
};

function getQuestionsByDifficulty(subject, difficulty, count = 5) {
    if (subject === 'mixed') {
        const allQuestions = [
            ...satQuestions.math[difficulty],
            ...satQuestions.reading[difficulty],
            ...satQuestions.writing[difficulty]
        ];
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }
    
    const questions = satQuestions[subject][difficulty];
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

function getRandomQuestions(subject, count = 10) {
    const allDifficulties = ['easy', 'medium', 'hard'];
    const questions = [];
    
    allDifficulties.forEach(difficulty => {
        if (subject === 'mixed') {
            questions.push(...satQuestions.math[difficulty]);
            questions.push(...satQuestions.reading[difficulty]);
            questions.push(...satQuestions.writing[difficulty]);
        } else {
            questions.push(...satQuestions[subject][difficulty]);
        }
    });
    
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}