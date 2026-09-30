"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import { easeIn, motion, useAnimate } from "framer-motion";
import { wait } from "next/dist/lib/wait";
import { particles } from "./constants";
import { LineSet } from "./components/LineSet";
import { CommentIndicator } from "./components/CommentIndicator";
import { MockInterface } from "./components/MockInterface";
import { ShapeSwitcher } from "./components/ShapeSwitcher";

const AnimatedDesignGraphic = () => {
  const [scope, animate] = useAnimate();
  const animationIds = useMemo(
    () => [
      "#header-2",
      "#sub_header-2",
      "#sub_header_text-2",
      "#button-2",
      "#article_1-2",
      "#article_2-2",
      "#article_3-2",
      "#text_article_1_1-2",
      "#text_article_1-2",
      "#text_article_2-2",
      "#text_article_3-2",
      "#image-2",
    ],
    [],
  );

  const resetPositions = useCallback(async () => {
    await Promise.all([
      ...animationIds.map((id) => animate(id, { x: -200 }, { duration: 0 })),

      animate("#button-1, #button-2", { fill: "#4c53c8" }, { duration: 0 }),
      animate("#image-1, #image-2", { fill: "#941528" }, { duration: 0 }),

      animate(
        "#comment-1, #comment-2, #comment-3, #comment-4",
        { opacity: 0 },
        { duration: 0 },
      ),
      await wait(200),
    ]);
  }, [animationIds, animate]);

  useEffect(() => {
    let isActive = true;
    const animationSpeed = 0.6;

    const slideGroup = async (selectors: string[], targetX: number) => {
      const query = selectors.join(", ");
      await animate(
        query,
        { x: targetX },
        { duration: animationSpeed, ease: "linear" },
      );
    };

    const runInfiniteSequence = async () => {
      while (isActive) {
        await resetPositions();

        if (!isActive) break;

        await slideGroup(["#header-2"], 0);
        await slideGroup(
          ["#sub_header-2", "#sub_header_text-2", "#button-2"],
          0,
        );
        await slideGroup(
          ["#article_1-2", "#text_article_1-2", "#text_article_1_1-2"],
          0,
        );
        await slideGroup(["#article_2-2", "#text_article_2-2"], 0);
        await slideGroup(["#article_3-2", "#text_article_3-2"], 0);
        await slideGroup(["#image-2"], 0);

        await animate([
          [
            "#button-1",
            { fill: "#FF0000" },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#comment-1",
            { opacity: 1 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#button-2",
            { fill: "#FF0000" },
            { duration: animationSpeed, ease: easeIn },
          ],
        ]);

        await animate([
          [
            "#sub_header_text-1",
            { x: 50 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#comment-2",
            { opacity: 1 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#sub_header_text-2",
            { x: 50 },
            { duration: animationSpeed, ease: "linear" },
          ],
        ]);

        await animate([
          [
            "#image-1",
            { fill: "#000080" },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#comment-3",
            { opacity: 1 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#image-2",
            { fill: "#000080" },
            { duration: animationSpeed, ease: easeIn },
          ],
        ]);

        await animate([
          [
            "#sub_header_text-1",
            { x: 0 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#comment-4",
            { opacity: 1 },
            { duration: animationSpeed, ease: easeIn },
          ],
          [
            "#sub_header_text-2",
            { x: 0 },
            { duration: animationSpeed, ease: "linear" },
          ],
        ]);

        await wait(1000);
      }
    };

    runInfiniteSequence();

    return () => {
      isActive = false;
    };
  }, [animate, resetPositions]);

  return (
    <div className="flex flex-row gap-2" ref={scope}>
      <svg width="200px" height="200px">
        <g transform="scale(0.5)">
          <rect
            width="400px"
            height="350px"
            fill="white"
            color="white"
            stroke="white"
            strokeWidth={1}
          />
          <rect
            width="400px"
            height="10px"
            fill="black"
            color="black"
            stroke="black"
            strokeWidth={1}
          />
          <rect
            y={10}
            width="400px"
            height="10px"
            fill="#2b2b2b"
            color="#2b2b2b"
            stroke="#2b2b2b"
            strokeWidth={1}
          />
          <LineSet
            isHorizontal={false}
            amount={1}
            distanceBetween={10}
            size={330}
            startX={350}
            startY={20}
            color="gray"
          />
          <LineSet
            isHorizontal={true}
            amount={6}
            distanceBetween={50}
            size={50}
            startX={350}
            startY={20}
            color="gray"
          />
          <LineSet
            isHorizontal={false}
            amount={1}
            distanceBetween={10}
            size={330}
            startX={50}
            startY={20}
            randomness={0}
            color="gray"
          />
          <LineSet
            isHorizontal={true}
            amount={1}
            distanceBetween={80}
            size={50}
            startX={0}
            startY={30}
            color="gray"
          />

          <motion.g id="comment-1" initial={{ opacity: 0 }}>
            <CommentIndicator avatarColor="red" startX={360} startY={30} />
          </motion.g>
          <motion.g id="comment-2" initial={{ opacity: 0 }}>
            <CommentIndicator avatarColor="blue" startX={360} startY={80} />
          </motion.g>
          <motion.g id="comment-3" initial={{ opacity: 0 }}>
            <CommentIndicator avatarColor="black" startX={360} startY={130} />
          </motion.g>
          <motion.g id="comment-4" initial={{ opacity: 0 }}>
            <CommentIndicator avatarColor="blue" startX={360} startY={180} />
          </motion.g>

          <line
            stroke="gray"
            strokeWidth={2}
            strokeDasharray="10 5"
            x1={5}
            x2={40}
            y1={25}
            y2={25}
          />
          <LineSet
            isHorizontal={true}
            amount={5}
            distanceBetween={5}
            size={30}
            startX={5}
            startY={30}
            randomness={0.2}
            color="gray"
          />
        </g>
        <g transform="translate(50,20) scale(0.5)">
          <MockInterface id_prefix="1" />
        </g>
      </svg>
      <svg width="200px" height="200px">
        <g>
          <line
            stroke="white"
            strokeWidth={6}
            x1={40}
            x2={110}
            y1={120}
            y2={120}
          />
          <line
            stroke="white"
            strokeWidth={6}
            x1={80}
            x2={110}
            y1={115}
            y2={118}
          />
          <LineSet
            isHorizontal={false}
            amount={2}
            distanceBetween={50}
            size={40}
            startX={50}
            startY={120}
            color="white"
            strokeWidth={6}
          />

          <line
            stroke="white"
            strokeWidth={6}
            x1={116}
            x2={143}
            y1={140}
            y2={140}
          />
          <LineSet
            isHorizontal={false}
            amount={2}
            distanceBetween={20}
            size={20}
            startX={120}
            startY={140}
            color="white"
            strokeWidth={6}
          />
          <line
            stroke="white"
            strokeWidth={6}
            x1={60}
            x2={60}
            y1={80}
            y2={110}
          />
          <line
            stroke="white"
            strokeWidth={3}
            x1={60}
            x2={45}
            y1={90}
            y2={105}
          />
          <line
            stroke="white"
            strokeWidth={3}
            x1={45}
            x2={45}
            y1={120}
            y2={105}
          />
        </g>
        <g>
          <circle cx={135} cy={75} r={10} fill="white" />
          <line
            stroke="white"
            strokeWidth={6}
            x1={138}
            x2={135}
            y1={80}
            y2={130}
          />
          <line
            stroke="white"
            strokeWidth={6}
            x1={138}
            x2={110}
            y1={130}
            y2={130}
          />
          <line
            stroke="white"
            strokeWidth={6}
            x1={110}
            x2={110}
            y1={127}
            y2={160}
          />
          <motion.line
            stroke="#D4D4D4"
            strokeWidth={6}
            x1={136}
            x2={100}
            y1={95}
            y2={100}
            strokeLinecap="round"
            animate={{ y2: [60, 110, 70] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
            }}
          />
          <line
            stroke="white"
            strokeWidth={6}
            x1={110}
            x2={110}
            y1={127}
            y2={160}
          />

          <motion.line
            stroke="white"
            strokeWidth={6}
            x1={136}
            x2={100}
            y1={95}
            y2={110}
            strokeLinecap="round"
            animate={{ y2: [120, 80, 110] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
            }}
          />
        </g>
        <g>
          {particles.map((p, i) => (
            <motion.g
              key={p.id}
              initial={{
                x: p.startX,
                y: p.startY,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: p.endX,
                y: p.endY,
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0.5],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <ShapeSwitcher id={i % 3} size="sm" color="white" />
            </motion.g>
          ))}
        </g>
      </svg>
      <svg width="122px" height="400px">
        <g transform="translate(0) scale(0.6)">
          <MockInterface id_prefix="2" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedDesignGraphic;
