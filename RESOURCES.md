# GNN Resources

## Knowledge

### Articles & tutorials

- [Article: "A Gentle Introduction to Graph Neural Networks" — Sanchez-Lengeling et al. (Distill, 2021)](https://distill.pub/2021/gnn-intro/)
  Interactive visual explainer covering what graphs are, how to encode them, and the message-passing paradigm. Best starting point for conceptual understanding.

- [Article: "Understanding Convolutions on Graphs" — (Distill, 2021)](https://distill.pub/2021/understanding-gnns/)
  Companion to the above. Focuses on spectral vs spatial graph convolutions. Use for: understanding the convolution analogy.

- [Paper: "Introduction to Graph Neural Networks for Machine Learning Engineers" (arXiv:2412.19419)](https://arxiv.org/abs/2412.19419)
  Recent tutorial paper introducing GNNs through the encoder-decoder framework. Use for: structured technical overview with task-specific decoders.

- [Tutorial: "A Practical Tutorial on Graph Neural Networks" — ACM Computing Surveys](https://dl.acm.org/doi/10.1145/3503043)
  Detailed walkthrough of motivations, mathematics, and applications. Use for: bridging theory to practice.

### Foundational textbooks

- [Book: "Graph Representation Learning" — William L. Hamilton](https://www.cs.mcgill.ca/~wlh/grl_book/)
  Probably the best single starting point. Free PDF available from the author. Covers node embeddings, GNN architectures (GCN, GraphSAGE, GAT), and generative graph models in a clean, systematic way. Use for: theoretical depth and historical context.

- [Book: "Deep Learning on Graphs" — Yao Ma & Jiliang Tang (Cambridge University Press)](https://web.njit.edu/~ym329/dlg_book/)
  More textbook-style with exercises. Covers robustness, scalability, and applications like recommender systems. Use for: structured learning with practice problems, and topics like adversarial robustness that other books undercover.

- [Book: "Graph Neural Networks: Foundations, Frontiers, and Applications" — Wu, Pan, Chen, Long, Zhang, Yu (eds.)](https://graph-neural-networks.github.io/)
  Comprehensive edited volume with contributions from many GNN researchers. Use for: surveying the breadth of the field including theory, generative models, and applications across domains.

### Theoretical / mathematical grounding

- [Book/Paper: "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges" — Bronstein, Bruna, Cohen, Velickovic (2021)](https://geometricdeeplearning.com/)
  The "GDL blueprint" — unifies GNNs with CNNs, transformers, and other architectures via symmetry/invariance principles. Denser but conceptually powerful. Use for: understanding *why* GNN architectures are shaped the way they are, and how they relate to the broader deep learning landscape. (Note: title corrected from earlier "Algebras" — verified against arXiv:2104.13478.)

- [Paper: "How Powerful are Graph Neural Networks?" — Xu et al. (2019)](https://arxiv.org/abs/1810.00826)
  The GIN paper's theoretical core: proves message-passing GNN expressiveness is upper-bounded by 1-WL (Weisfeiler-Leman), and that sum-aggregation + MLP reaches that bound. Use for: the formal argument behind GNN expressiveness limits (Lessons 10 and 15).

- [Paper: "Weisfeiler and Leman Go Neural: Higher-order Graph Neural Networks" — Morris et al. (2019)](https://arxiv.org/abs/1810.02244)
  Extends the WL &harr; GNN equivalence to the k-WL hierarchy via k-GNNs. Use for: understanding what "beyond 1-WL" claims in papers actually mean and cost (Lesson 15).

- [Paper: "Recipe for a General, Powerful, Scalable Graph Transformer" (GraphGPS) — Rampášek et al. (2022)](https://arxiv.org/abs/2205.12454)
  Hybrid message-passing + global-attention recipe with modular positional/structural encodings. Use for: the current standard reference architecture for graph transformers (Lesson 17).

### Architecture papers (Module 3)

- [Paper: "Inductive Representation Learning on Large Graphs" — Hamilton, Ying & Leskovec (2017)](https://arxiv.org/abs/1706.02216)
  The GraphSAGE paper. Use for: the sample-and-aggregate framework and the inductive vs. transductive distinction, directly relevant to streaming/growing fraud graphs (Lesson 8).

- [Paper: "Graph Attention Networks" — Veličković et al. (2018)](https://arxiv.org/abs/1710.10903)
  The GAT paper. Use for: the attention-coefficient formulation and its inductive PPI benchmark results (Lesson 9).

### Over-smoothing and deep GNNs (Module 2)

- [Paper: "Deeper Insights into Graph Convolutional Networks for Semi-Supervised Learning" — Li, Han & Wu (AAAI 2018)](https://arxiv.org/abs/1801.07606)
  Formalizes graph convolution as Laplacian smoothing and names the over-smoothing problem. Use for: Lesson 6, understanding why deep GNNs degrade.

- [Paper: "PairNorm: Tackling Oversmoothing in GNNs" — Zhao & Akoglu (ICLR 2020)](https://arxiv.org/abs/1909.12223)
  Normalization layer that rescales embeddings post-layer to counter over-smoothing. Use for: Lesson 6 mitigation techniques.

- [Paper: "DropEdge: Towards Deep Graph Convolutional Networks on Node Classification" — Rong et al. (ICLR 2020)](https://arxiv.org/abs/1907.10903)
  Randomly drops edges during training to slow over-smoothing and regularize. Use for: Lesson 6 mitigation techniques.

### Pooling, training, and shallow embeddings (Module 4)

- [Paper: "Hierarchical Graph Representation Learning with Differentiable Pooling" — Ying et al. (NeurIPS 2018)](https://arxiv.org/abs/1806.08804)
  Introduces DiffPool: learned, differentiable soft cluster assignments that coarsen a graph across layers instead of pooling flat. Use for: graph-level tasks needing hierarchical structure beyond sum/mean/max readout (Lesson 12).

- [Paper: "node2vec: Scalable Feature Learning for Networks" — Grover & Leskovec (KDD 2016)](https://arxiv.org/abs/1607.00653)
  Generalizes DeepWalk's uniform random walk into a biased 2nd-order walk (p, q parameters) interpolating between homophily and structural-equivalence embeddings.

- [Paper: "DeepWalk: Online Learning of Social Representations" — Perozzi, Al-Rfou & Skiena (KDD 2014)](https://arxiv.org/abs/1403.6652)
  The original shallow-embedding paper: random walks + skip-gram, predating GNNs. Use for: historical grounding of Lesson 14.

- [Paper: "LINE: Large-scale Information Network Embedding" — Tang et al. (WWW 2015)](https://arxiv.org/abs/1503.03578)
  Walk-free shallow embedding via first- and second-order proximity, designed for web-scale graphs.

- [Paper: "Deep Graph Infomax" — Veličković, Fedus, Hamilton, Liò, Bengio, Hjelm (ICLR 2019)](https://arxiv.org/abs/1809.10341)
  Contrastive self-supervised GNN pretraining: maximize mutual information between node embeddings and a global graph summary, using a corrupted graph as the negative. Use for: label-scarce training scenarios (Lesson 13), directly relevant to fraud-label scarcity.

### Generative models & LLMs (Module 7 — frontiers, fast-moving)

- [Paper: "GraphVAE: Towards Generation of Small Graphs Using Variational Autoencoders" — Simonovsky & Komodakis (2018)](https://arxiv.org/abs/1802.03480)
  One-shot graph generation via VAE with an approximate graph-matching reconstruction loss. Use for: understanding the permutation-invariance problem in graph generation (Lesson 22).

- [Paper: "GraphRNN: Generating Realistic Graphs with Deep Auto-regressive Models" — You, Ying, Ren, Hamilton & Leskovec (2018)](https://arxiv.org/abs/1802.08773)
  Sequential, BFS-ordered autoregressive graph generation. Use for: the scalable alternative to one-shot generative models (Lesson 22).

- [Paper: "Talk like a Graph: Encoding Graphs for Large Language Models" — Fatemi, Halcrow & Perozzi (ICLR 2024)](https://arxiv.org/abs/2310.04560)
  Shows graph-to-text encoding choice swings LLM graph-reasoning accuracy by 4.8–61.8 points. Use for: understanding LLM-as-graph-reasoner limitations (Lesson 23). Fast-moving area — treat as one data point, not settled theory.

- [Paper: "A Survey of Graph Meets Large Language Model: Progress and Future Directions" — Li et al. (IJCAI 2024)](https://arxiv.org/abs/2311.12399)
  Proposes the Enhancer / Predictor / Alignment taxonomy for LLM-GNN integration. Use for: vocabulary and a map of the LLM+graph literature (Lesson 23). Survey of a fast-moving area — expect newer surveys to supersede parts of this.

- [Blog/Project: "GraphRAG: Unlocking LLM discovery on narrative private data" — Microsoft Research](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/) ([code](https://github.com/microsoft/graphrag))
  Knowledge-graph-based RAG with community detection and hierarchical summarization. Use for: a concrete, widely-adopted example of graph-structured retrieval for LLMs (Lesson 23). Actively developed open-source project, not a peer-reviewed paper — implementation details may shift.

### Practical / applied

- [Book: "Hands-On Graph Neural Networks Using Python" — Maxime Labonne](https://github.com/PacktPublishing/Hands-On-Graph-Neural-Networks-Using-Python)
  Code-first approach, works through PyTorch Geometric implementations. Use for: getting hands dirty quickly rather than reading theory first.

- [Docs: "Introduction by Example" — PyTorch Geometric](https://pytorch-geometric.readthedocs.io/en/latest/get_started/introduction.html)
  Official docs showing the `edge_index` (COO) format, node feature matrices, and graph batching in actual code. Use for: grounding the tensor-level representation of graphs (Lesson 2) in the library you'd actually use.

### Survey papers (required reading)

- [Paper: "A Comprehensive Survey on Graph Neural Networks" — Wu et al. (2021)](https://arxiv.org/abs/1901.00596)
  Broad survey covering taxonomy of GNN methods (recurrent, convolutional, spatial, spectral), training frameworks, and applications. Use for: getting the lay of the land across GNN variants.

- [Paper: "Graph Neural Networks: A Review of Methods and Applications" — Zhou et al. (2020)](https://arxiv.org/abs/1812.08434)
  Another major survey, organized by GNN variants and application domains. Use for: complementary perspective to Wu et al., especially on application-specific architectures.

- [Paper: "Semi-Supervised Classification with Graph Convolutional Networks" — Kipf & Welling (2017)](https://arxiv.org/abs/1609.02907)
  The foundational GCN paper. Use for: understanding the original spectral motivation simplified to a spatial rule.

### Dynamic / temporal GNNs (fraud & AML relevant, Module 6)

- [Paper: "Temporal Graph Networks for Deep Learning on Dynamic Graphs" — Rossi, Chamberlain, Frasca, Eynard, Monti & Bronstein (2020)](https://arxiv.org/abs/2006.10637)
  Introduces TGN: a per-node memory vector updated incrementally via a message function and GRU-based memory updater, plus a graph-embedding module for the final read-out. Use for: the stateful, low-latency architecture most applicable to real-time transaction scoring (Lesson 20).

- [Paper: "EvolveGCN: Evolving Graph Convolutional Networks for Dynamic Graphs" — Pareja et al. (2020)](https://arxiv.org/abs/1902.10191)
  Evolves the GCN's own weight matrices over time via an RNN (EvolveGCN-H / EvolveGCN-O), rather than maintaining per-node state. Use for: the discrete-time/snapshot end of the dynamic-GNN spectrum.

- [Paper: "Inductive Representation Learning on Temporal Graphs" (TGAT) — Xu, Ruan, Korpeoglu, Kumar & Achan (2020)](https://arxiv.org/abs/2002.07962)
  Functional time encoding (via Bochner's theorem) combined with self-attention over a temporally-ordered neighborhood, with no persistent state. Use for: understanding time-aware attention as a building block TGN extends.

- [Paper: "DyRep: Learning Representations over Dynamic Graphs" — Trivedi, Farajtabar, Biswal & Zha (2019)](https://arxiv.org/abs/1803.04051)
  Models dynamic graphs as two coupled temporal point processes (topological evolution and node interaction dynamics). Use for: the historical precursor to TGN's memory mechanism.

- [Paper: "Graph Neural Networks for Financial Fraud Detection: A Review" — Cheng, Zou, Xiang & Jiang (2024)](https://arxiv.org/abs/2411.05815)
  Reviews 100+ studies and proposes a unified framework categorizing GNN methodologies for financial fraud detection, including class imbalance and camouflage/heterophily. Use for: the applied AML/fraud survey connecting this course's theory to production systems (Lesson 21).

### Course

- [Course: Stanford CS224W — Machine Learning with Graphs (Jure Leskovec)](https://cs224w.stanford.edu/)
  Full university course with lectures, slides, and assignments. Video lectures available on [YouTube](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn). Use for: comprehensive structured curriculum.

- [Slides: CS224W Lecture 8 — Graph Transformers](https://web.stanford.edu/class/cs224w/slides/08-graph-transformer1.pdf)
  Stanford's treatment of adapting Transformers to graphs. Use for: a second walkthrough of the positional-encoding problem alongside GraphGPS (Lesson 17).

## Wisdom (Communities)

- [r/MachineLearning](https://reddit.com/r/MachineLearning)
  Active ML subreddit. Filter for GNN-related discussions. Good for paper discussions and practical advice.

- [PyG Discussion Forum](https://github.com/pyg-team/pytorch_geometric/discussions)
  PyTorch Geometric community. Use for: implementation questions and debugging.

- [Papers With Code — Graph Neural Networks](https://paperswithcode.com/area/graphs)
  Benchmarks and leaderboards for GNN tasks. Use for: understanding state-of-the-art and comparing methods.

## Gaps

- ~~Temporal/dynamic GNN resources need specific paper links filled in (TGN, EvolveGCN, DyRep, TGAT)~~ — resolved: individual entries added above (2026-08-08), alongside Lesson 20's dedicated reference doc (`reference/temporal-gnn-patterns.html`) comparing all four.
- No single resource that cleanly covers the evolution from spectral to spatial methods for someone with an advanced ML background but no GNN exposure. Lesson 7 (GCN) now covers this directly, but no standalone external resource has been found that does it better than piecing together Distill's "Understanding Convolutions on Graphs" §5 with Kipf & Welling's own simplification narrative.
- Lesson 23 (LLMs + GNNs) has no single canonical paper — the field is too new. Sourced from three complementary references instead (Talk like a Graph, the Li et al. IJCAI survey, GraphRAG); revisit this lesson periodically as the space matures.
