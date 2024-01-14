export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            comments: {
                Row: {
                    author_id: string
                    created_at: string
                    expense_id: string
                    id: string
                    last_modified: string
                    text: string
                }
                Insert: {
                    author_id: string
                    created_at?: string
                    expense_id: string
                    id?: string
                    last_modified?: string
                    text?: string
                }
                Update: {
                    author_id?: string
                    created_at?: string
                    expense_id?: string
                    id?: string
                    last_modified?: string
                    text?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "comments_author_id_fkey"
                        columns: ["author_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "comments_expense_id_fkey"
                        columns: ["expense_id"]
                        isOneToOne: false
                        referencedRelation: "expenses"
                        referencedColumns: ["id"]
                    },
                ]
            }
            expenses: {
                Row: {
                    amount: number
                    created_at: string
                    currency: string
                    id: string
                    last_modified: string
                }
                Insert: {
                    amount?: number
                    created_at?: string
                    currency: string
                    id?: string
                    last_modified?: string
                }
                Update: {
                    amount?: number
                    created_at?: string
                    currency?: string
                    id?: string
                    last_modified?: string
                }
                Relationships: []
            }
            groups: {
                Row: {
                    created_at: string
                    description: string
                    id: string
                    last_modified: string
                    name: string
                    thumbnail_url: string | null
                }
                Insert: {
                    created_at?: string
                    description?: string
                    id?: string
                    last_modified?: string
                    name?: string
                    thumbnail_url?: string | null
                }
                Update: {
                    created_at?: string
                    description?: string
                    id?: string
                    last_modified?: string
                    name?: string
                    thumbnail_url?: string | null
                }
                Relationships: []
            }
            members: {
                Row: {
                    added_at: string
                    group_id: string
                    user_id: string
                }
                Insert: {
                    added_at?: string
                    group_id: string
                    user_id: string
                }
                Update: {
                    added_at?: string
                    group_id?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "members_group_id_fkey"
                        columns: ["group_id"]
                        isOneToOne: false
                        referencedRelation: "groups"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "members_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                ]
            }
            payments: {
                Row: {
                    expense_id: string
                    user_id: string
                    weight: number
                }
                Insert: {
                    expense_id: string
                    user_id: string
                    weight?: number
                }
                Update: {
                    expense_id?: string
                    user_id?: string
                    weight?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "payments_expense_id_fkey"
                        columns: ["expense_id"]
                        isOneToOne: false
                        referencedRelation: "expenses"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "payments_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                ]
            }
            users: {
                Row: {
                    avatar_url: string | null
                    created_at: string
                    id: string
                    last_modified: string
                    name: string
                }
                Insert: {
                    avatar_url?: string | null
                    created_at?: string
                    id?: string
                    last_modified?: string
                    name: string
                }
                Update: {
                    avatar_url?: string | null
                    created_at?: string
                    id?: string
                    last_modified?: string
                    name?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database
    }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
              Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
          Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
            Database["public"]["Views"])
      ? (Database["public"]["Tables"] &
            Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
          ? R
          : never
      : never

export type TablesInsert<
    PublicTableNameOrOptions extends
        | keyof Database["public"]["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
      ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
            Insert: infer I
        }
          ? I
          : never
      : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
        | keyof Database["public"]["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
      ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
            Update: infer U
        }
          ? U
          : never
      : never

export type Enums<
    PublicEnumNameOrOptions extends
        | keyof Database["public"]["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
      ? Database["public"]["Enums"][PublicEnumNameOrOptions]
      : never
