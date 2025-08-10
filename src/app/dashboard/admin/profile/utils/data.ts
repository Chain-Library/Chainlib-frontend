export type AdminStatus = "active" | "revoked";
export type AdminRole = "Super Admin" | "Admin" | "Moderator";

export interface Admin {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  role: AdminRole;
  status: AdminStatus;
  lastLoginAt: string;
}

export function timeAgo(iso: string): string {
  const now = Date.now();
  const diffMs = now - new Date(iso).getTime();
  const mins = Math.max(1, Math.round(diffMs / 60000));
  if (mins < 60) return `${mins} Minute${mins === 1 ? "" : "s"} Ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} Hour${hrs === 1 ? "" : "s"} Ago`;
  const days = Math.round(hrs / 24);
  return `${days} Day${days === 1 ? "" : "s"} Ago`;
}

const hoursAgo = (h: number) =>
  new Date(Date.now() - h * 3600_000).toISOString();
const daysAgo = (d: number) =>
  new Date(Date.now() - d * 24 * 3600_000).toISOString();

/** Dummy admins */
export const ADMINS: Admin[] = [
  {
    id: 1,
    firstName: "Anna",
    lastName: "Loop",
    name: "Anna Loop",
    email: "annaloop@gmail.com",
    role: "Super Admin",
    status: "active",
    lastLoginAt: hoursAgo(2),
  },
  {
    id: 2,
    firstName: "Habib",
    lastName: "Musa",
    name: "Habib  Musa",
    email: "habibmusa@gmail.com",
    role: "Admin",
    status: "active",
    lastLoginAt: hoursAgo(2),
  },
  {
    id: 3,
    firstName: "Darrin",
    lastName: "Collins",
    name: "Darrin Collins",
    email: "darrin.collins@example.com",
    role: "Moderator",
    status: "active",
    lastLoginAt: hoursAgo(5),
  },
  {
    id: 4,
    firstName: "Ola",
    lastName: "Peters",
    name: "Ola  Peters",
    email: "ola.peters@example.com",
    role: "Admin",
    status: "revoked",
    lastLoginAt: daysAgo(10),
  },
  {
    id: 5,
    firstName: "Grace",
    lastName: "Kim",
    name: "Grace Kim",
    email: "grace.kim@example.com",
    role: "Admin",
    status: "active",
    lastLoginAt: hoursAgo(1),
  },
  {
    id: 6,
    firstName: "Ahmed",
    lastName: "Saleh",
    name: "Ahmed  Saleh",
    email: "ahmed.saleh@example.com",
    role: "Moderator",
    status: "active",
    lastLoginAt: daysAgo(1),
  },
  {
    id: 7,
    firstName: "Maya",
    lastName: "Singh",
    name: "Maya Singh",
    email: "maya.singh@example.com",
    role: "Admin",
    status: "revoked",
    lastLoginAt: daysAgo(30),
  },
  {
    id: 8,
    firstName: "Leo",
    lastName: "Garcia",
    name: "Leo  Garcia",
    email: "leo.garcia@example.com",
    role: "Admin",
    status: "active",
    lastLoginAt: hoursAgo(12),
  },
  {
    id: 9,
    firstName: "Zara",
    lastName: "Ali",
    name: "Zara Ali",
    email: "zara.ali@example.com",
    role: "Moderator",
    status: "active",
    lastLoginAt: daysAgo(3),
  },
  {
    id: 10,
    firstName: "Victor",
    lastName: "Ng",
    name: "Victor Ng",
    email: "victor.ng@example.com",
    role: "Admin",
    status: "active",
    lastLoginAt: hoursAgo(4),
  },
  {
    id: 11,
    firstName: "Chioma",
    lastName: "Okeke",
    name: "Chioma Okeke",
    email: "chioma.okeke@example.com",
    role: "Admin",
    status: "revoked",
    lastLoginAt: daysAgo(14),
  },
  {
    id: 12,
    firstName: "Tomiwa",
    lastName: "Adeyemi",
    name: "Tomiwa Adeyemi",
    email: "tomiwa.adeyemi@example.com",
    role: "Admin",
    status: "active",
    lastLoginAt: hoursAgo(7),
  },
];

export const getActiveAdmins = () =>
  ADMINS.filter((a) => a.status === "active");
export const getRevokedAdmins = () =>
  ADMINS.filter((a) => a.status === "revoked");

export function searchAdmins(q: string, list: Admin[] = ADMINS): Admin[] {
  const s = q.trim().toLowerCase();
  if (!s) return list;
  return list.filter(
    (a) =>
      a.name.toLowerCase().includes(s) ||
      a.email.toLowerCase().includes(s) ||
      a.role.toLowerCase().includes(s)
  );
}

export function paginate<T>(items: T[], page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  return {
    total: items.length,
    page,
    pageSize,
    data: items.slice(start, start + pageSize),
  };
}
