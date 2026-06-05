import { CreateChallenge } from "@/components/common/create-challenge/createFrom";

export default function CreateChallengePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Create Challenge</h1>
        <p className="text-slate-600">Create a new gaming challenge</p>
      </div>
      <CreateChallenge />
    </div>
  );
}
