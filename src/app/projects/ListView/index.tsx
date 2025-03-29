import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Task, useGetTasksQuery } from "@/state/api";

type ListViewProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

function ListView({ id, setIsModalNewTaskOpen }: ListViewProps) {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ocorreu um erro ao buscar as tasks</div>;

  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header name="Lista" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
        </div>
      </div>
    </div>
  );
}

export default ListView;
