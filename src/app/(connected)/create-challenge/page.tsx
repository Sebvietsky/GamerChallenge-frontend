import { CreateChallenge } from "@/components/common/create-challenge/createFrom";

export default function CreateChallengePage() {
  return (
    <div className="space-y-8 py-8 px-8 w-full overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold">Créé un Challenge</h1>
      </div>
      <CreateChallenge />
    </div>
  );
}
