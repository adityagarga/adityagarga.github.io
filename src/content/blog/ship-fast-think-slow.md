---
title: 'Ship Fast, Think Slow'
date: 2026-03-22
description: 'On product fundamentals, multi-agent orchestration, and Waddle progress.'
type: note
draft: true
---

## The fundamentals aren't going anywhere

- idea to prototype gap has collapsed — concept to working code in an afternoon
- but execution speed ≠ building the right thing
- understanding users, scoping ruthlessly, shipping iteratively — still the hard parts
- faster execution arguably makes product thinking _more_ important — you can waste time at unprecedented speed
- the best builders right now aren't the fastest coders, they're the ones who know what _not_ to build
- product taste is becoming a bottleneck — when anyone can build, the question shifts from "can we?" to "should we?"

## What's actually relevant right now

- **multi-agent orchestration** — decomposing tasks across cooperating agents, managing shared state, handling failures
- the hard part isn't making one agent smart, it's making several agents not fall apart together
- **context management** — what to include, what to leave out, how to structure info for the model
- not "prompt engineering" in the clever-prompt sense — more like data engineering for attention
- **evaluation as a discipline** — how do you know your agents are actually getting better? evals are the new unit tests
- **tool design for agents** — the APIs and interfaces you expose to agents matter as much as the agents themselves. bad tool design = bad agent behavior
- **knowing when to _not_ use agents** — not every problem needs orchestration. sometimes a single well-prompted call is better than a pipeline of five agents

## A masters flashback

- masters in signal processing, popular module on multi-agent systems
- back then: distributed coordination, consensus algorithms, game theory, agents negotiating in simulated environments
- principles transfer — coordination protocols, conflicting objectives, communication overhead as a real cost
- implementation is completely different — rule-based state machines → LLMs reasoning in natural language
- interesting parallel: signal processing was all about extracting signal from noise. context management for LLMs is basically the same problem
- the math of multi-agent consensus (Byzantine fault tolerance, voting protocols) maps surprisingly well to how you'd want LLM agents to reach agreement
- back then "agent communication language" (FIPA ACL) was a thing — now agents just talk in English. is that better or worse?

## The vibe coding trap

- "vibe coding" is fun and productive for prototyping but dangerous for anything that needs to last
- easy to build something that works but nobody (including you) understands
- the gap between demo and production is wider than ever — a working demo is now trivial, a reliable product is still hard
- debugging agent behavior is a new kind of hell — non-deterministic, hard to reproduce, logs are walls of text
- technical debt accumulates faster when AI writes your code and you don't review it critically

## Waddle calendar progress

- [Waddle](https://waddlecalendar.com) — shared calendar app, AI agents handle scheduling through natural language
- recent focus: the calendar view itself
- real-time sync across users, conflict resolution when two people book the same slot
- agent layer sits between user input and calendar operations (FastAPI + Supabase + React)
- biggest challenge: ambiguous requests — "find a time that works for everyone next week" = constraint satisfaction under the hood
- learning: the UX around agent actions matters more than the agent quality — users need to understand _what happened_ and _why_
- transparency > magic — showing the agent's reasoning builds trust, hiding it creates frustration
- shared calendars are a social product disguised as a productivity tool — the human dynamics are harder than the tech
