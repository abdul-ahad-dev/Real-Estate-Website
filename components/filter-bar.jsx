'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal } from "lucide-react"

export function FilterBar() {
  return (
    (<div className="w-full bg-zinc-950 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-1">
          <label htmlFor="keyword" className="text-sm font-medium text-zinc-200">
            Keyword
          </label>
          <Input
            id="keyword"
            placeholder="Enter Keyword"
            className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-400" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:w-[400px]">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-200">Status</label>
            <Select>
              <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectGroup>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-200">Type</label>
            <Select>
              <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <SelectValue placeholder="All Type" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectGroup>
                  <SelectItem value="all">All Type</SelectItem>
                  <SelectItem value="type1">Type 1</SelectItem>
                  <SelectItem value="type2">Type 2</SelectItem>
                  <SelectItem value="type3">Type 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:ml-4">
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button
            className="h-10 w-full bg-yellow-400 text-yellow-950 hover:bg-yellow-500 sm:w-24">
            Search
          </Button>
        </div>
      </div>
    </div>)
  );
}