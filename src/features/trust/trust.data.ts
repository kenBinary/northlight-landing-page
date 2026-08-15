import vertexLabs from "../../assets/logos/vertex-labs.svg";
import halcyon from "../../assets/logos/halcyon.svg";
import ridgeway from "../../assets/logos/ridgeway.svg";
import formation from "../../assets/logos/formation.svg";
import copperline from "../../assets/logos/copperline.svg";

export interface TrustLogo {
  id: string;
  name: string;
  src: string;
}

export const TRUST_LOGOS: TrustLogo[] = [
  {
    id: "vertex-labs",
    name: "Vertex Labs",
    src: vertexLabs,
  },
  {
    id: "halcyon",
    name: "Halcyon",
    src: halcyon,
  },
  {
    id: "ridgeway",
    name: "Ridgeway",
    src: ridgeway,
  },
  {
    id: "formation",
    name: "Formation",
    src: formation,
  },
  {
    id: "copperline",
    name: "Copperline",
    src: copperline,
  },
];
