import {
    HiOutlineArrowTrendingUp,
    HiOutlineBolt,
    HiOutlineChartBar,
    HiOutlineCodeBracket,
    HiOutlineLightBulb,
    HiOutlineMagnifyingGlass,
    HiOutlineMapPin,
} from "react-icons/hi2";

import { IconName } from "@/types";

const icons = {
    analytics: HiOutlineChartBar,
    automation: HiOutlineBolt,
    code: HiOutlineCodeBracket,
    growth: HiOutlineArrowTrendingUp,
    local: HiOutlineMapPin,
    search: HiOutlineMagnifyingGlass,
    strategy: HiOutlineLightBulb,
};

interface IconProps {
    name: IconName;
    className?: string;
}

const Icon = ({ name, className = "h-6 w-6" }: IconProps) => {
    const Component = icons[name];
    return <Component className={className} aria-hidden="true" />;
};

export default Icon;
