import WorkIcon from './assets/work.svg';
import EducationIcon from './assets/education.svg';
import ProjectIcon from './assets/project.svg';
import LifeIcon from './assets/guitar.svg';
import ContactIcon from './assets/contact.svg';
import PartooIcon from './assets/partoo.svg';
import CelsiusIcon from './assets/celsius.svg';
import SchlumbergerIcon from './assets/schlumberger.svg';
import SuperyuIcon from './assets/superyu.svg';
import FastapiIcon from './assets/fastapi.svg';
import FigmaIcon from './assets/figma.svg';
import GithubIcon from './assets/github.svg';
import PostgresqlIcon from './assets/postgresql.svg';
import PythonIcon from './assets/python.svg';
import ReactIcon from './assets/react.svg';
import ReactqueryIcon from './assets/reactquery.svg';
import RedisIcon from './assets/redis.svg';
import SupabaseIcon from './assets/supabase.svg';
import TailwindcssIcon from './assets/tailwindcss.svg';
import TypescriptIcon from './assets/typescript.svg';
import EmailIcon from './assets/email.svg';
import LinkedinIcon from './assets/linkedin.svg';
import DatabricksIcon from './assets/databricks.svg';
import AzureIcon from './assets/azure.svg';
import PowerbiIcon from './assets/powerbi.svg';
import TensorflowIcon from './assets/tensorflow.svg';

const iconMap = {
    Work: WorkIcon,
    Education: EducationIcon,
    Project: ProjectIcon,
    Life: LifeIcon,
    Contact: ContactIcon,
    Partoo: PartooIcon,
    Celsius: CelsiusIcon,
    Schlumberger: SchlumbergerIcon,
    Superyu: SuperyuIcon,
    Fastapi: FastapiIcon,
    Figma: FigmaIcon,
    Github: GithubIcon,
    Postgresql: PostgresqlIcon,
    Python: PythonIcon,
    React: ReactIcon,
    Reactquery: ReactqueryIcon,
    Redis: RedisIcon,
    Supabase: SupabaseIcon,
    Tailwindcss: TailwindcssIcon,
    Typescript: TypescriptIcon,
    Email: EmailIcon,
    Linkedin: LinkedinIcon,
    Databricks: DatabricksIcon,
    Azure: AzureIcon,
    Powerbi: PowerbiIcon,
    Tensorflow: TensorflowIcon,
} as const;

export type IconName = keyof typeof iconMap;

const IconComponent = ({ icon }: { icon: IconName }) => (
    <img className="h-full max-h-full w-full max-w-full" src={iconMap[icon]} alt={icon} />
);

export const icons: Record<
    IconName,
    (props: React.ImgHTMLAttributes<HTMLImageElement>) => JSX.Element
> = Object.fromEntries(
    (Object.keys(iconMap) as IconName[]).map(name => [
        name,
        props => <IconComponent icon={name} {...props} />,
    ]),
) as Record<IconName, (props: React.ImgHTMLAttributes<HTMLImageElement>) => JSX.Element>;
