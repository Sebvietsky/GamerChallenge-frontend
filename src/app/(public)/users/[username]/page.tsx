interface UserProfilePageProps {
  params: Promise<{ username: string }>;
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const { username } = await params;

  return (
    <div className="space-y-8 py-8">
      <div>
        <h1 className="text-3xl font-bold">Profile: {username}</h1>
      </div>
      {/* User profile content will go here */}
    </div>
  );
}
