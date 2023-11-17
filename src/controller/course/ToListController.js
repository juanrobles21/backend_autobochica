"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/courses/sql_toList");
const ToList_1 = __importDefault(require("../../dao/courses/ToList"));
class CourseControllerGet extends ToList_1.default {
    getMeCourse(req, res) {
        CourseControllerGet.getCourse(sql_toList_1.SQL_COURSE_VIEW.VIEW, [], res);
    }
}
const courseControllerGet = new CourseControllerGet();
exports.default = courseControllerGet;
