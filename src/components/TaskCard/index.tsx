import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";

type TaskCardProps = {
  task: Task;
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl dark:border-gray-700 dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Anexos
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {task.attachments.map((attachment) => (
              <Image
                key={attachment.fileURL}
                src={`/${attachment.fileURL}`}
                alt={attachment.fileName}
                width={200}
                height={100}
                className="rounded-lg border border-gray-300 object-cover shadow-sm dark:border-gray-600"
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-300">
        <p>
          <strong className="text-gray-600 dark:text-gray-400">Id:</strong>{" "}
          {task.id}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">Status:</strong>{" "}
          <span className="font-semibold capitalize text-blue-600 dark:text-blue-400">
            {task.status}
          </span>
        </p>
        <p className="col-span-2 text-lg font-semibold text-gray-900 dark:text-white">
          {task.title}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">
            Prioridade:
          </strong>{" "}
          <span className="font-semibold capitalize text-red-600 dark:text-red-400">
            {task.priority}
          </span>
        </p>
        <p className="col-span-2 text-gray-700 dark:text-gray-300">
          <strong className="text-gray-600 dark:text-gray-400">
            Descrição:
          </strong>{" "}
          {task.description || "Sem descrição"}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">Tags:</strong>{" "}
          {task.tags || "Sem tags"}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">
            Data de início:
          </strong>{" "}
          {task.startDate
            ? format(new Date(task.startDate), "dd/MM/yyyy")
            : "Sem data"}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">
            Data de vencimento:
          </strong>{" "}
          {task.dueDate
            ? format(new Date(task.dueDate), "dd/MM/yyyy")
            : "Sem data"}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">Autor:</strong>{" "}
          {task.author ? task.author.username : "Desconhecido"}
        </p>
        <p>
          <strong className="text-gray-600 dark:text-gray-400">
            Atribuído:
          </strong>{" "}
          {task.assignee ? task.assignee.username : "Não atribuído"}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
