import prisma from "@/prisma";
import { ResponseCode } from "@/types/api.type";
import { NextResponse } from "next/server";
import { z } from "zod";

var bcrypt = require("bcryptjs");

const customerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
});

/**
 * Register a new customer, and return the customer object.
 *
 * @param request
 * @returns customer object without password
 */
export async function POST(request: Request) {
    try {
        //Parse and validate the response body
        const body = await request.json();
        const {email, password, firstName} = customerSchema.parse(body)

        await prisma.$connect();
        const customer = await prisma.customer.create({
            data: {
                email,
                password: bcrypt.hashSync(password),
                firstName
            }
        })

        return NextResponse.json({
            status: ResponseCode.Success,
            data: {
                id: customer.id,
                email: customer.email,
                firstName: customer.firstName,
                createdAt: customer.createdAt,
            }
        })

    } catch (err) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            
        }

    }
}