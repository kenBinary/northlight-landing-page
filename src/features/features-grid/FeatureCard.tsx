import {
  BellIcon,
  BlocksIcon,
  ChartLineIcon,
  FunnelIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "../../components/Icons";
import type { Feature } from "./features.data";
import styles from "./FeatureCard.module.css";

const ICON_MAP: Record<Feature["icon"], React.JSX.Element> = {
  "chart-line": <ChartLineIcon size={22} color="var(--c-accent)" />,
  funnel: <FunnelIcon size={22} color="var(--c-accent)" />,
  users: <UsersIcon size={22} color="var(--c-accent)" />,
  bell: <BellIcon size={22} color="var(--c-accent)" />,
  blocks: <BlocksIcon size={22} color="var(--c-accent)" />,
  "shield-check": <ShieldCheckIcon size={22} color="var(--c-accent)" />,
};

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className={styles["card"]}>
      <div className={styles["iconTile"]} aria-hidden="true">
        {ICON_MAP[feature.icon]}
      </div>
      <h3 className={styles["cardTitle"]}>{feature.title}</h3>
      <p className={styles["cardDescription"]}>{feature.description}</p>
    </article>
  );
}
