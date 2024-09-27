import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //create users
  //   const createUserAndReturn = await prisma.user.createManyAndReturn({
  //     data: [
  //       { name: "Alice", email: "alice@example.com", age: 30 },
  //       { name: "Bob", email: "bob@example.com", age: 25 },
  //       { name: "Charlie", email: "charlie@example.com", age: 28 },
  //       { name: "David", email: "david@example.com", age: 35 },
  //       { name: "Eve", email: "eve@example.com", age: 32 },
  //       { name: "Frank", email: "frank@example.com", age: 27 },
  //       { name: "Grace", email: "grace@example.com", age: 24 },
  //       { name: "Hank", email: "hank@example.com", age: 33 },
  //       { name: "Ivy", email: "ivy@example.com", age: 29 },
  //       { name: "Jack", email: "jack@example.com", age: 31 }
  //     ],
  //   });
  //   console.log('All Users Created Successfully', createUserAndReturn)
  //create teams
  //   const createTeams = await prisma.teams.createManyAndReturn({
  //     data: [
  //       { name: "Development", leaderId: 1 },
  //       { name: "Marketing", leaderId: 2 },
  //       { name: "Sales", leaderId: 3 },
  //       { name: "Support", leaderId: 4 },
  //       { name: "HR", leaderId: 5 },
  //       { name: "Finance", leaderId: 6 },
  //       { name: "Design", leaderId: 7 },
  //       { name: "Operations", leaderId: 8 },
  //       { name: "Product", leaderId: 9 },
  //       { name: "Engineering", leaderId: 10 },
  //     ],
  //   });
  //   console.log("All Teams Created Successfully", createTeams)
  //create userTeams
  //   const createUserTeams = await prisma.userTeams.createManyAndReturn({
  //     data: [
  //       { userId: 1, teamId: 1 },
  //       { userId: 1, teamId: 2 },
  //       { userId: 2, teamId: 3 },
  //       { userId: 2, teamId: 4 },
  //       { userId: 3, teamId: 1 },
  //       { userId: 3, teamId: 5 },
  //       { userId: 4, teamId: 6 },
  //       { userId: 4, teamId: 7 },
  //       { userId: 5, teamId: 8 },
  //       { userId: 6, teamId: 9 },
  //     ],
  //   });
  //   console.log('Created Successfully', createUserTeams)
  //create projects
  //   const createProjects = await prisma.projects.createManyAndReturn({
  //     data:[
  //         { title: 'Project A', description: 'Development Project' },
  //         { title: 'Project B', description: 'Marketing Campaign' },
  //         { title: 'Project C', description: 'Sales Strategy' },
  //         { title: 'Project D', description: 'Support Portal' },
  //         { title: 'Project E', description: 'HR System' },
  //         { title: 'Project F', description: 'Finance Automation' },
  //         { title: 'Project G', description: 'Product Design' },
  //         { title: 'Project H', description: 'Operations Optimization' },
  //         { title: 'Project I', description: 'New Product Launch' },
  //         { title: 'Project J', description: 'Engineering Overhaul' }
  //     ]
  //   })
  //create task
  //   const createAllTask = await prisma.tasks.createManyAndReturn({
  //     data: [
  //       { title: "Task 1", project_id: 1, parent_task_id: null },
  //       { title: "Task 1.1", project_id: 1, parent_task_id: 1 },
  //       { title: "Task 2", project_id: 2, parent_task_id: null },
  //       { title: "Task 2.1", project_id: 2, parent_task_id: 3 },
  //       { title: "Task 3", project_id: 3, parent_task_id: null },
  //       { title: "Task 4", project_id: 4, parent_task_id: null },
  //       { title: "Task 4.1", project_id: 4, parent_task_id: 6 },
  //       { title: "Task 5", project_id: 5, parent_task_id: null },
  //       { title: "Task 6", project_id: 6, parent_task_id: null },
  //       { title: "Task 7", project_id: 7, parent_task_id: null },
  //     ],
  //   });
  //   console.log('Create all task' , createAllTask)
};

main();
