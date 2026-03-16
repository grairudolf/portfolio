"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { languageSkills, toolSkills } from "@/data/portfolio";

function SkillIcon({ name, Icon, color }: { name: string; Icon: IconType; color: string }) {
  return (
    <div title={name} className="flex h-12 w-12 items-center justify-center">
      <Icon className="text-2xl" style={{ color }} />
    </div>
  );
}

export default function SkillsSection() {
  const skills = [...languageSkills, ...toolSkills];
  const skillsLoop = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative z-20 bg-offwhite px-4 py-20">
      <div className="mx-auto w-full max-w-page">
        <h2 className="section-title mb-10 text-4xl uppercase md:text-5xl">Skills and Tools</h2>

        <div className="neo-border clay-surface overflow-hidden p-4">
          <motion.div
            className="flex w-max items-center gap-6"
            animate={{ x: ["0%", "-33.3333%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {skillsLoop.map((skill, idx) => (
              <SkillIcon
                key={`${skill.name}-${idx}`}
                name={skill.name}
                Icon={skill.icon as never}
                color={skill.brandColor}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
