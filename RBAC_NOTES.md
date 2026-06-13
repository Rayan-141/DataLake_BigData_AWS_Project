# RBAC Notes for DataLake Analytics Cloud Portal

## Roles in the app

- `admin`
  - Full access to all features
  - Can add users, departments, datasets, reports, tasks
- `manager`
  - Can view and manage department data
  - Can approve datasets and reports
- `analyst`
  - Can view dashboards and reports
  - Can create tasks and review status

## Why RBAC matters

- Controls access to sensitive data.
- Ensures users see only what they need.
- Matches case study requirement for role-based access.

## How RBAC is implemented

- In this simple app, `role` is stored in `users.role`.
- Backend can check user role before allowing actions.
- In AWS, use IAM roles and policies for cloud access.

## Example viva answer

"The project uses role-based access control by assigning each user a role such as admin, manager or analyst. This helps enforce security and ensures proper permissions for datasets, reports, and workflows."
