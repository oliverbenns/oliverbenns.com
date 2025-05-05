import {
  FaAws,
  FaDocker,
  FaGolang,
  FaNodeJs,
  FaReact,
  FaDigitalOcean,
} from "react-icons/fa6";

import { BiLogoTypescript } from "react-icons/bi";
import {
  DiGoogleCloudPlatform,
  DiRedis,
  DiRubyRough,
  DiHeroku,
  DiMysql,
} from "react-icons/di";
import { SiPostgresql, SiPulumi, SiTerraform } from "react-icons/si";

import { IconType } from "react-icons/lib";

type Option = {
  label: string;
  icon: IconType;
};

const options: Record<string, Option> = {
  react: {
    label: "React",
    icon: FaReact,
  },
  typescript: {
    label: "Typescript",
    icon: BiLogoTypescript,
  },
  reactNative: {
    label: "React Native",
    icon: FaReact,
  },
  go: {
    label: "Go",
    icon: FaGolang,
  },
  node: {
    label: "Node",
    icon: FaNodeJs,
  },
  postgresql: {
    label: "PostgreSQL",
    icon: SiPostgresql,
  },
  docker: {
    label: "Docker",
    icon: FaDocker,
  },
  pulumi: {
    label: "Pulumi",
    icon: SiPulumi,
  },
  gcp: {
    label: "GCP",
    icon: DiGoogleCloudPlatform,
  },
  redis: {
    label: "Redis",
    icon: DiRedis,
  },
  aws: {
    label: "AWS",
    icon: FaAws,
  },
  ruby: {
    label: "Ruby",
    icon: DiRubyRough,
  },
  terraform: {
    label: "Terraform",
    icon: SiTerraform,
  },
  heroku: {
    label: "Heroku",
    icon: DiHeroku,
  },
  mysql: {
    label: "MySQL",
    icon: DiMysql,
  },
  digitalocean: {
    label: "Digital Ocean",
    icon: FaDigitalOcean,
  },
};

type TechCardProps = {
  id: string;
};

export const TechCard = ({ id }: TechCardProps) => {
  const option = options[id];

  return (
    <div className="py-1 px-2 flex gap-2 border border-gray-200 rounded-sm items-center">
      <div className="text-2xl w-[12px] h-[12px] flex items-center justify-center">
        <option.icon title={option.label} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs">{option.label}</span>
      </div>
    </div>
  );
};
