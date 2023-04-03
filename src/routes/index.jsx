import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuards from "../guards/auth.guards";
import HRAuthGuards from "../guards/hr_auth.guards";
import NoAuthGuards from "../guards/no-auth.guards";
import MainLayout from "../layout/MainLayout";
import StatusEmployee from "../modules/dboard/StatusEmployee";

import DayOffCalendar from "../pages/Calendar/DayOffCalendar";
import ChangeAvatar from "../pages/ChangePersonInfo/ChangeAvatar";
import ChangePassword from "../pages/ChangePersonInfo/ChangePassword";
import Support from "../pages/ChangePersonInfo/Support";
import DashBoard from "../pages/dboard/DashBoard";
import MissPunchExp from "../pages/Detail/MissPunchExp";
import MissPunchDetail from "../pages/Detail/MissPunchExp";
import TimeOffExp from "../pages/Detail/TimeOffExp";
import EmployeeComplaintTable from "../pages/HRpages/EmployeeComplaint/EmployeeComplaintTable";
import MisspunchNote from "../pages/HRpages/MissPunch/MisspunchNote";
import MisspunchForm from "../pages/HRpages/MissPunch/MisspunchTable";
import TimeoffNote from "../pages/HRpages/TimeOff/TimeoffNote";
import TimeoffForm from "../pages/HRpages/TimeOff/TimeoffTable";
import TimesheetNote from "../pages/HRpages/Timesheet/TimesheetNote";
import TimesheetTable from "../pages/HRpages/Timesheet/TimesheetTable";
import CreateNewInforUser from "../pages/HRpages/UserManagement/CreateNewInforUser";
import UserManagement from "../pages/HRpages/UserManagement/UserManagement";
import Login from "../pages/Login/Login";
import InforForm from "../pages/personal infor/InforForm";
import IncidentReport from "../pages/Ticket/IncidentReport/IncidentReport";
import IncidentReportAddNew from "../pages/Ticket/IncidentReport/IncidentReportAddNew";
import InjuryReport from "../pages/Ticket/InjuryReport/InjuryReport";
import InjuryReportAddNew from "../pages/Ticket/InjuryReport/InjuryReportAddNew";
import MissPunchAddNew from "../pages/Ticket/MissPunch/MissPunchAddNew";
import MissPunchForm from "../pages/Ticket/MissPunch/MissPunchTable";
import TimeOffAddNew from "../pages/Ticket/TimeOff/TimeOffAddNew";
import TimeOffForm from "../pages/Ticket/TimeOff/TimeOffTable";
import TimeSheetTable from "../pages/Ticket/TimeSheet/TimeSheetTable";
import PayStub from "../pages/Ticket/PayStub/PayStub";
import DailyTask from "../pages/Ticket/DailyTask/DailyTask";
import PayRoll from "../pages/Ticket/PayRoll/PayRoll";
import DailyTaskAddNew from "../pages/Ticket/DailyTask/DailyTaskAddNew";

export default function Router() {
  const routing = useRoutes([
    // {
    //   path: "/",
    //   element: <SearchMovie title="Search Page" />,
    // },
    {
      path: '/',
      element: <NoAuthGuards />,
      children: [
        {
          path: "/",
          element: <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <Login title="Login" />,
        },
      ]
    },
    {
      path: "/",
      element: <AuthGuards />,
      children: [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              path: "/admin",
              element: <DashBoard title="Dashboard" />,
            },
            {
              path: "/admin/employee/change-avatar",
              element: <ChangeAvatar title='Change Avatar' />,
            },
            {
              path: "/admin/employee/change-password",
              element: <ChangePassword title='Change Password' />,
            },
            {
              path: "/admin/employee/support",
              element: <Support />,
            },
            {
              path: "/admin/personal_information",
              element: <InforForm deactive={true} title='Personal Information' />,
            },
            {
              path: "/admin/pay_stub",
              element: <PayStub title='Pay Stub' />,
            },
            {
              path: "/admin/pay_roll",
              element: <PayRoll title='Pay Roll' />,
            },
            {
              path: "/admin/daily_task",
              element: <DailyTask title='Daily Task' />,
            },
            {
              path: "/admin/daily_task/addnew",
              element: <DailyTaskAddNew title='Daily Task' />,
            },
            {
              path: "/admin/timesheet",
              element: <TimeSheetTable title="Time Sheet" />
            }
            ,
            {
              path: "/admin/ticket",
              children: [
                {
                  path: "/admin/ticket/miss-punch",
                  element: <MissPunchForm title="Miss Punch" />,
                },
                {
                  path: "/admin/ticket/miss-punch/addnew",
                  element: <MissPunchAddNew title="Miss Punch" />,
                },
                {
                  path: "/admin/ticket/time-off",
                  element: <TimeOffForm title="Time Off" />,
                },
                {
                  path: "/admin/ticket/time-off/addnew",
                  element: <TimeOffAddNew title="Time Off" />,
                },
                {
                  path: "/admin/ticket/injury",
                  element: <InjuryReport title="Injury Report" />,
                },
                {
                  path: "/admin/ticket/injury/addnew",
                  element: <InjuryReportAddNew title="Injury Report" />,
                },
                {
                  path: "/admin/ticket/incident",
                  element: <IncidentReport title="Incident Report" />,
                },
                {
                  path: "/admin/ticket/incident/addnew",
                  element: <IncidentReportAddNew title="Incident Report" />,
                },
              ]
            },
            {
              path: "/admin/department",
              children: [
                {
                  path: "/admin/department/calendar",
                  element: <DayOffCalendar title="Calendar" />,
                },
              ]
            },

            {
              path: "/admin/hr",
              element: <HRAuthGuards />,
              children: [
                {
                  path: "/admin/hr/timesheet",
                  element: <TimesheetTable title='HR TimeSheet' />
                },
                {
                  path: "/admin/hr/timesheet/note/:id",
                  element: <TimesheetNote title='HR TimeSheet' />
                },
                {
                  path: "/admin/hr/user-management",
                  element: <UserManagement title='HR Employee Management' />
                },
                {
                  path: "/admin/hr/user-management/create",
                  element: <CreateNewInforUser title='Create New User' />
                },
                {
                  path: "/admin/hr/user-management/edit/:username",
                  element: <CreateNewInforUser title='Detail User' />
                },
                {
                  path: "/admin/hr/misspuch-management",
                  element: <MisspunchForm title='HR Misspunch Management' />
                },
                {
                  path: "/admin/hr/misspuch-management/note/:id/:name",
                  element: <MisspunchNote title='HR Misspunch Management' />
                },
                {
                  path: "/admin/hr/timeoff-management",
                  element: <TimeoffForm title='HR TimeOff Management' />
                },
                {
                  path: "/admin/hr/timeoff-management/note/:id/:name",
                  element: <TimeoffNote title='HR TimeOff Management' />
                },
                {
                  path: "/admin/hr/employee-complaint",
                  element: <EmployeeComplaintTable title='Employee Complaint' />
                },

              ]
            },

          ]
        },
        {
          path: "/admin/ticket/miss-punch/miss-punch-detail/:referenceCode/:yourname",
          element: <MissPunchExp />,
        },
        {
          path: "/admin/ticket/time-off/time-off-detail/:referenceCode/:yourname",
          element: <TimeOffExp />,
        },
        {
          path: "/admin/hr",
          element: <HRAuthGuards />,
          children: [
            {
              path: "/admin/hr/timesheet/view/:user/:dateStart/:dateEnd",
              element: <></>,
            }
          ]
        }

      ]
    },
  ]);
  return routing;
}
