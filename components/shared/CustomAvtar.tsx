import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  imageUrl: string;
  name: string;
  position: string;
  companyName: string;
}
export function CustomAvtar({ imageUrl, name, position, companyName }: Props) {
  return (
    <div className=" custom_avatar_wrapper ">
      <Avatar>
        <AvatarImage src={imageUrl} alt="sundar" className=" object-cover" />
        <AvatarFallback>IMG</AvatarFallback>
      </Avatar>
      <p>{name}</p>
      <p>
        <span className=" font-[400]">{position}</span> of {companyName}
      </p>
    </div>
  );
}
