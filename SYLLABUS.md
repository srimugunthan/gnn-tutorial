# GNN Syllabus & Lesson Plan

A structured learning path from graph fundamentals through to temporal GNNs for fraud detection. Each lesson is a short, self-contained HTML document with quizzes. Lessons are grouped into modules that build on each other.

---

## Module 1: Foundations — Graphs as Data

The goal is to establish the conceptual vocabulary and understand *why* GNNs exist.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 01 | Why Graphs? What Graphs Encode | Why can't we just use MLPs or CNNs on relational data? | Distill: GNN Intro §1–3 |
| 02 | Graph Representations in Practice | Adjacency matrices, edge lists, node feature matrices — how do we actually store a graph for a neural network? | Hamilton Ch. 1–2 |
| 03 | The Three Prediction Tasks | Node classification, link prediction, graph classification — what changes in the architecture for each? | Distill: GNN Intro §4 |

**Module outcome:** You can look at a real-world problem and say whether it's a node, edge, or graph-level task, and describe what the input tensors look like.

---

## Module 2: Message Passing — The Core Mechanism

The heart of every GNN. This module covers the abstract framework before specialising into architectures.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 04 | Message Passing: How Nodes Talk to Neighbors | What are the gather → aggregate → update steps, and why must aggregation be permutation-invariant? | Distill: GNN Intro §6; Hamilton Ch. 5.1 |
| 05 | Stacking Layers and the Receptive Field | What does depth mean in a GNN? How does information propagate across the graph? | Hamilton Ch. 5.2; Distill: Understanding Convolutions §6 |
| 06 | Over-smoothing and the Depth Problem | Why do GNNs struggle with many layers, and what can we do about it? | CS224W Lecture 6; Li et al. "Deeper Insights into GCNs" |

**Module outcome:** You can trace a message-passing computation by hand on a small graph and explain why a 2-layer GNN captures 2-hop neighborhoods.

---

## Module 3: The Major Architectures

Each lesson covers one architecture family, its design choices, and trade-offs relative to the others.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 07 | GCN: Spectral Roots, Spatial Practice | How did Kipf & Welling simplify spectral graph convolutions into a one-hop neighborhood rule? | Kipf & Welling (2017); Distill: Understanding Convolutions §5 |
| 08 | GraphSAGE: Inductive Learning and Sampling | How does GraphSAGE decouple from the full graph and why does that matter for scalability? | Hamilton et al. "Inductive Representation Learning on Large Graphs" (2017) |
| 09 | GAT: Attention on Graphs | How do attention weights let a node weigh its neighbors differently, and how does this compare to GCN's fixed weights? | Veličković et al. "Graph Attention Networks" (2018) |
| 10 | GIN: Maximising Expressiveness | What makes GIN as powerful as the WL test, and what does that tell us about what GNNs *can't* distinguish? | Xu et al. "How Powerful are Graph Neural Networks?" (2019) |
| 11 | Architecture Comparison | When should you reach for GCN vs GAT vs GraphSAGE vs GIN? A decision framework. | Wu et al. Survey (2021) §3–4 |

**Module outcome:** Given a problem description, you can recommend an architecture and justify the choice in terms of transductive vs inductive, attention needs, and expressiveness requirements.

---

## Module 4: Training, Pooling, and Practical Considerations

Moving from architecture to the full training pipeline.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 12 | Readout and Pooling for Graph-Level Tasks | How do we go from per-node embeddings to a single graph representation? (sum, mean, hierarchical pooling) | Hamilton Ch. 6; Ying et al. "Hierarchical Graph Representation Learning" |
| 13 | Loss Functions and Training Strategies | Supervised vs self-supervised, transductive vs inductive splits, avoiding data leakage on graphs | CS224W Lecture 5; Hamilton Ch. 6 |
| 14 | Node Embeddings Before GNNs | DeepWalk, Node2Vec, LINE — what came before GNNs and when are shallow embeddings still useful? | Hamilton Ch. 3–4; Grover & Leskovec "node2vec" (2016) |

**Module outcome:** You can design a full GNN training pipeline for a graph classification task, including feature engineering, pooling, loss, and evaluation.

---

## Module 5: The Bigger Picture — Theory and Unification

Connecting GNNs to the broader deep learning landscape.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 15 | The Weisfeiler-Leman Hierarchy | What are the theoretical limits of GNN expressiveness, and what does WL-equivalence really mean? | Xu et al. (2019); Morris et al. "Weisfeiler and Leman Go Neural" (2019) |
| 16 | Geometric Deep Learning: The Symmetry Perspective | How do GNNs, CNNs, and Transformers all fall out of the same symmetry/invariance principles? | Bronstein et al. "Geometric Deep Learning" (2021) |
| 17 | Graph Transformers | How do Transformer-style architectures adapt to graphs, and do they overcome GNN limitations? | CS224W Lecture 8; Rampášek et al. "Recipe for a General, Powerful, Scalable Graph Transformer" |

**Module outcome:** You can place any new GNN paper on the map — its relationship to WL expressiveness, what symmetries it exploits, and where it sits in the spectral-spatial-attention spectrum.

---

## Module 6: Specialized Topics — Towards Real-World Graphs

Covering graph types and problems that go beyond the standard static, homogeneous setting.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 18 | Heterogeneous Graphs | How do we handle graphs with multiple node and edge types? (R-GCN, HAN, HGT) | CS224W Lecture 9; Schlichtkrull et al. "Modeling Relational Data with GCNs" |
| 19 | Knowledge Graphs and Embedding | How are knowledge graphs embedded and reasoned over? (TransE, DistMult, ComplEx) | Hamilton Ch. 4; CS224W Lecture 10 |
| 20 | Dynamic and Temporal GNNs | How do GNNs handle graphs that change over time? (TGAT, TGN, EvolveGCN, DyRep) | Rossi et al. "Temporal Graph Networks" (2020); Pareja et al. "EvolveGCN" (2020) |
| 21 | GNNs for Fraud and AML Detection | How are temporal GNNs applied to financial crime detection? What makes fraud graphs different? | Survey: Liu et al. "Graph-based Fraud Detection"; domain-specific papers |

**Module outcome:** You can evaluate whether a GNN approach is appropriate for a real-world problem involving heterogeneous, temporal, or knowledge-graph-structured data — and specifically understand the GNN pipeline for AML/fraud detection.

---

## Module 7: Generative Models and Frontiers (Optional)

For broader literacy. Lower priority relative to the mission.

| #  | Lesson | Core question | Key reading |
|----|--------|---------------|-------------|
| 22 | Deep Generative Models for Graphs | How do VAEs and autoregressive models generate graphs? (GraphVAE, GraphRNN) | Hamilton Ch. 8–9; CS224W Lecture 18 |
| 23 | LLMs + GNNs | How are language models and graph models being combined? | CS224W Lecture 16 |

---

## Suggested progression

```
Module 1 (Lessons 1–3)     Foundations
       ↓
Module 2 (Lessons 4–6)     Message Passing
       ↓
Module 3 (Lessons 7–11)    Architectures
       ↓
Module 4 (Lessons 12–14)   Training Pipeline
       ↓
  ┌────┴────┐
  ↓         ↓
Module 5   Module 6         Theory ↔ Specialization
(15–17)    (18–21)          (can be done in either order)
  └────┬────┘
       ↓
Module 7 (22–23)            Frontiers (optional)
```

## Reference documents to build alongside lessons

| Reference doc | Created with | Purpose |
|---------------|-------------|---------|
| Glossary | Lesson 1 (done) | Term definitions, updated each lesson — now covers all 23 lessons |
| Message-Passing Cheatsheet | Lesson 4 (done) | The gather-aggregate-update pattern in notation and pseudocode |
| Architecture Comparison Card | Lesson 11 (done) | Side-by-side of GCN / GAT / GraphSAGE / GIN |
| WL Test Reference | Lesson 15 (done) | The WL color-refinement algorithm step by step |
| Temporal GNN Patterns | Lesson 20 (done) | How TGN / EvolveGCN / TGAT / DyRep differ |

---

*23 lessons total — all drafted as of 2026-08-08. Modules 1–4 (14 lessons) cover the core. Modules 5–6 connect to theory and your AML/fraud domain. Module 7 is optional. See NOTES.md for how this batch was generated and what that means for pacing.*
